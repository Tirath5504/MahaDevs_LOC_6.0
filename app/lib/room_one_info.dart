import 'dart:io';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';

class Room extends StatefulWidget {
  const Room({Key? key}) : super(key: key);

  @override
  State<Room> createState() => _RoomState();
}

class _RoomState extends State<Room> {
  final double buttonSize = 50.0;
  final Color buttonColor = Colors.blue;

  // Checkboxes state for buttons
  bool towelsChecked = false;
  bool soapChecked = false;
  bool shampooChecked = false;
  bool pillowsChecked = false;
  bool bedSheetChecked = false;
  bool coffeeMakerChecked = false;
  bool refrigeratorChecked = false;
  bool tvRemoteChecked = false;
  bool acRemoteChecked = false;

  late File _imageFile;

  Future<void> _openCamera() async {
    final imagePicker = ImagePicker();
    try {
      final XFile? image =
          await imagePicker.pickImage(source: ImageSource.camera);
      if (image != null) {
        setState(() {
          _imageFile = File(image.path);
        });
        _uploadImageToCloudinary();
      }
    } catch (e) {
      print('Error capturing image: $e');
    }
  }

  Future<void> _uploadImageToCloudinary() async {
    final uri =
        Uri.parse("https://api.cloudinary.com/v1_1/dstefsngu/image/upload");
    final request = http.MultipartRequest('POST', uri)
      ..fields['upload_preset'] = 'locpreset'
      ..files.add(await http.MultipartFile.fromPath(
        'file',
        _imageFile.path,
        filename: 'image.jpg',
      ));

    try {
      final response = await request.send();

      if (response.statusCode == 200) {
        final responseJson = await response.stream.bytesToString();
        print('Image uploaded successfully!');
        print('Image URL: $responseJson');
      } else {
        print('Failed to upload image. Status code: ${response.statusCode}');
      }
    } catch (error) {
      print('Error uploading image: $error');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Stack(
          children: [
            Positioned.fill(
              child: Transform.rotate(
                angle: pi / 2,
                child: Image.asset(
                  'assets/images/room_one.png',
                  width: double.infinity,
                  fit: BoxFit.contain,
                ),
              ),
            ),
            Positioned(
              top: MediaQuery.of(context).size.height * 0.255,
              left: MediaQuery.of(context).size.width * 0.2,
              child: Opacity(
                opacity: 0.0,
                child: SizedBox(
                  height: MediaQuery.of(context).size.height * 0.15,
                  width: MediaQuery.of(context).size.width * 0.35,
                  child: ElevatedButton(
                    onPressed: () {
                      showDialog(
                        context: context,
                        builder: (BuildContext context) {
                          return StatefulBuilder(
                            builder: (context, setState) {
                              return AlertDialog(
                                title: Text('WashRoom'),
                                content: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    CheckboxListTile(
                                      title: Text('Towels'),
                                      value: towelsChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          towelsChecked = value!;
                                        });
                                      },
                                    ),
                                    CheckboxListTile(
                                      title: Text('Soap'),
                                      value: soapChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          soapChecked = value!;
                                        });
                                      },
                                    ),
                                    CheckboxListTile(
                                      title: Text('Shampoo'),
                                      value: shampooChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          shampooChecked = value!;
                                        });
                                      },
                                    ),
                                  ],
                                ),
                                actions: [
                                  IconButton(
                                    icon: Icon(
                                      towelsChecked &&
                                              soapChecked &&
                                              shampooChecked
                                          ? Icons.check_circle
                                          : Icons.add,
                                      color: Colors.green,
                                    ),
                                    onPressed: () {
                                      _openCamera();
                                    },
                                  ),
                                ],
                              );
                            },
                          );
                        },
                      );
                    },
                    child: Text('Button 1'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: buttonColor,
                      fixedSize: Size(buttonSize, buttonSize),
                    ),
                  ),
                ),
              ),
            ),
            Positioned(
              top: MediaQuery.of(context).size.height * 0.515,
              left: MediaQuery.of(context).size.width * 0.45,
              child: Opacity(
                opacity: 0.0,
                child: SizedBox(
                  height: MediaQuery.of(context).size.height * 0.10,
                  width: MediaQuery.of(context).size.width * 0.35,
                  child: ElevatedButton(
                    onPressed: () {
                      showDialog(
                        context: context,
                        builder: (BuildContext context) {
                          return StatefulBuilder(
                            builder: (context, setState) {
                              return AlertDialog(
                                title: Text('BedRoom'),
                                content: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    CheckboxListTile(
                                      title: Text('Pillows'),
                                      value: pillowsChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          pillowsChecked = value!;
                                        });
                                      },
                                    ),
                                    CheckboxListTile(
                                      title: Text('Bed Sheet'),
                                      value: bedSheetChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          bedSheetChecked = value!;
                                        });
                                      },
                                    ),
                                  ],
                                ),
                                actions: [
                                  IconButton(
                                    icon: Icon(
                                      pillowsChecked && bedSheetChecked
                                          ? Icons.check_circle
                                          : Icons.add,
                                      color: Colors.green,
                                    ),
                                    onPressed: () {
                                      _openCamera();
                                    },
                                  ),
                                ],
                              );
                            },
                          );
                        },
                      );
                    },
                    child: Text('Button 2'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: buttonColor,
                      shape: CircleBorder(),
                      fixedSize: Size(100.0, 25.0),
                    ),
                  ),
                ),
              ),
            ),
            Positioned(
              top: MediaQuery.of(context).size.height * 0.65,
              left: MediaQuery.of(context).size.width * 0.4,
              child: Opacity(
                opacity: 0.0,
                child: SizedBox(
                  height: MediaQuery.of(context).size.height * 0.08,
                  width: MediaQuery.of(context).size.width * 0.35,
                  child: ElevatedButton(
                    onPressed: () {
                      showDialog(
                        context: context,
                        builder: (BuildContext context) {
                          return StatefulBuilder(
                            builder: (context, setState) {
                              return AlertDialog(
                                title: Text('LivingRoom'),
                                content: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    CheckboxListTile(
                                      title: Text('Coffee Maker'),
                                      value: coffeeMakerChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          coffeeMakerChecked = value!;
                                        });
                                      },
                                    ),
                                    CheckboxListTile(
                                      title: Text('Refrigerator'),
                                      value: refrigeratorChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          refrigeratorChecked = value!;
                                        });
                                      },
                                    ),
                                    CheckboxListTile(
                                      title: Text('TV Remote'),
                                      value: tvRemoteChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          tvRemoteChecked = value!;
                                        });
                                      },
                                    ),
                                    CheckboxListTile(
                                      title: Text('AC Remote'),
                                      value: acRemoteChecked,
                                      onChanged: (bool? value) {
                                        setState(() {
                                          acRemoteChecked = value!;
                                        });
                                      },
                                    ),
                                  ],
                                ),
                                actions: [
                                  IconButton(
                                    icon: Icon(
                                      coffeeMakerChecked &&
                                              refrigeratorChecked &&
                                              tvRemoteChecked &&
                                              acRemoteChecked
                                          ? Icons.check_circle
                                          : Icons.add,
                                      color: Colors.green,
                                    ),
                                    onPressed: () {
                                      _openCamera();
                                    },
                                  ),
                                ],
                              );
                            },
                          );
                        },
                      );
                    },
                    child: Text('Button 3'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: buttonColor,
                      shape: CircleBorder(),
                      fixedSize: Size(buttonSize, buttonSize),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
