import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:loc/room_one_info.dart';
import 'package:loc/room_two_info.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Map<String, dynamic>> roomData = [];

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String? authToken = prefs.getString('authToken');

    if (authToken == null) {
      return;
    }
    print(authToken);
    final response = await http.get(
      Uri.parse('https://loc-2024-backend.onrender.com/user/getStaff'),
      headers: {
        'authToken': authToken,
      },
    );

    if (response.statusCode == 200) {
      final jsonData = json.decode(response.body);
      final user = jsonData['user'];
      final roomsUnder = user['roomsUnder'];

      List<Map<String, dynamic>> tempRoomData = [];
      roomsUnder.forEach((roomNumber, dailyRoutineCompleted) {
        tempRoomData.add({
          'roomNumber': roomNumber,
          'dailyRoutineCompleted': dailyRoutineCompleted
        });
      });

      setState(() {
        roomData = tempRoomData;
      });
    } else {
      print(response.statusCode);
    }
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;

    return MaterialApp(
      home: Scaffold(
        body: ListView.builder(
          itemCount: roomData.length,
          itemBuilder: (context, index) {
            final room = roomData[index];
            final roomNumber = room['roomNumber'] as String;
            final isCompleted = room['dailyRoutineCompleted'] as bool;
            final roomType = roomNumber.endsWith('1') ||
                    roomNumber.endsWith('2') ||
                    roomNumber.endsWith('3')
                ? 'room.png'
                : 'room_one.png';

            return Card(
              child: InkWell(
                onTap: () {
                  if (!isCompleted &&
                      (roomNumber.endsWith('1') ||
                          roomNumber.endsWith('2') ||
                          roomNumber.endsWith('3'))) {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => Room(
                                roomNumber:
                                    roomNumber))); // Room1() or Room2() based on your requirement
                  } else {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => Room1(
                                roomNumber:
                                    roomNumber))); // Room1() or Room2() based on your requirement
                  }
                },
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    children: [
                      Container(
                        decoration: BoxDecoration(
                          border: Border(
                            left: BorderSide(
                              color: Colors.grey,
                              width: 1.0,
                            ),
                          ),
                        ),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(8.0),
                          child: Image.asset(
                            'assets/images/$roomType',
                            width: screenWidth * 0.25,
                            height: screenHeight * 0.15,
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                      const SizedBox(width: 16.0),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              roomNumber,
                              style: const TextStyle(
                                fontSize: 16.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            const SizedBox(height: 4.0),
                            Text(
                              'Daily Routine Check',
                              style: const TextStyle(fontSize: 14.0),
                            ),
                            const SizedBox(height: 4.0),
                            Row(
                              children: [
                                isCompleted
                                    ? Icon(
                                        Icons.check_circle,
                                        color: Colors.green,
                                        size: 18.0,
                                      )
                                    : Icon(
                                        Icons.cancel,
                                        color: Colors.red,
                                        size: 18.0,
                                      ),
                                const SizedBox(width: 8.0),
                                Text(
                                  isCompleted ? 'Completed' : 'Not Completed',
                                  style: TextStyle(
                                    fontSize: 12.0,
                                    color:
                                        isCompleted ? Colors.green : Colors.red,
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
