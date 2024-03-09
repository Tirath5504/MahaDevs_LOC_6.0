import 'package:flutter/material.dart';
import 'package:loc/Auth/room_info.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;

    return MaterialApp(
      theme: ThemeData(
        primarySwatch: const MaterialColor(
          0xFFC706F7,
          <int, Color>{
            50: Color(0xFFFCEAEF),
            100: Color(0xFFF9D3DE),
            200: Color(0xFFF6BCCD),
            300: Color(0xFFF3A5BA),
            400: Color(0xFFF08EA7),
            500: Color(0xFFC706F7),
            600: Color(0xFFA004E0),
            700: Color(0xFF7902C9),
            800: Color(0xFF5200B2),
            900: Color(0xFF2B009B),
          },
        ),
        scaffoldBackgroundColor: Colors.black87,
        textTheme: const TextTheme(
          bodyLarge: TextStyle(color: Colors.white),
        ),
      ),
      home: Scaffold(
        body: ListView.builder(
          itemCount: roomData.length,
          itemBuilder: (context, index) {
            final room = roomData[index];
            return Card(
              child: InkWell(
                onTap: () {
                  Navigator.push(
                      context, MaterialPageRoute(builder: (context) => Room()));
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
                            'assets/images/room_one.png',
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
                              room['roomNumber'],
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
                                room['dailyRoutineCompleted']
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
                                  room['dailyRoutineCompleted']
                                      ? 'Completed'
                                      : 'Not Completed',
                                  style: TextStyle(
                                    fontSize: 12.0,
                                    color: room['dailyRoutineCompleted']
                                        ? Colors.green
                                        : Colors.red,
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

final List<Map<String, dynamic>> roomData = [
  {'roomNumber': 'Room 101', 'dailyRoutineCompleted': true},
  {'roomNumber': 'Room 102', 'dailyRoutineCompleted': false},
  {'roomNumber': 'Room 103 ', 'dailyRoutineCompleted': false},
  {'roomNumber': 'Room 104', 'dailyRoutineCompleted': false},
  {'roomNumber': 'Room 105', 'dailyRoutineCompleted': false},
  {'roomNumber': 'Room 106', 'dailyRoutineCompleted': false},
  {'roomNumber': 'Room 107', 'dailyRoutineCompleted': false},
  {'roomNumber': 'Room 108', 'dailyRoutineCompleted': false},
  {'roomNumber': 'Room 109', 'dailyRoutineCompleted': false},
];
