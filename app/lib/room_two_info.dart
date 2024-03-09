import 'dart:ui';

import 'package:flutter/material.dart';
import 'dart:math';
import 'package:image_picker/image_picker.dart';

class Room1 extends StatefulWidget {
  const Room1({Key? key}) : super(key: key);

  @override
  State<Room1> createState() => _Room1State();
}

class _Room1State extends State<Room1> {
  final double buttonSize = 50.0;
  final Color buttonColor = Colors.blue;

  // Checkboxes state for button 1
  bool towelsChecked = false;
  bool soapChecked = false;
  bool shampooChecked = false;

  // Checkboxes state for button 2
  bool pillowsChecked = false;
  bool bedSheetChecked = false;

  // Checkboxes state for button 3
  bool coffeeMakerChecked = false;
  bool refrigeratorChecked = false;
  bool tvRemoteChecked = false;
  bool acRemoteChecked = false;

  Future<void> _openCamera() async {
    final imagePicker = ImagePicker();
    final XFile? image =
        await imagePicker.pickImage(source: ImageSource.camera);
    // You can use the 'image' variable to do something with the captured image
    if (image != null) {
      // Do something with the captured image
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Stack(
          children: [
            // Positioned.fill for the image
            Positioned.fill(
              child: Transform.rotate(
                angle: pi / 2,
                child: Image.asset(
                  'assets/images/room.png',
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
                                title: Text('WashRoom1'),
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
              top: MediaQuery.of(context).size.height * 0.575,
              left: MediaQuery.of(context).size.width * 0.125,
              child: Opacity(
                opacity: 0.0,
                child: SizedBox(
                  height: MediaQuery.of(context).size.height * 0.125,
                  width: MediaQuery.of(context).size.width * 0.35,
                  child: ElevatedButton(
                    onPressed: () {
                      showDialog(
                        context: context,
                        builder: (BuildContext context) {
                          return StatefulBuilder(
                            builder: (context, setState) {
                              return AlertDialog(
                                title: Text('Bed Area'),
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
              top: MediaQuery.of(context).size.height * 0.575,
              left: MediaQuery.of(context).size.width * 0.55,
              child: Opacity(
                opacity: 0.0,
                child: SizedBox(
                  height: MediaQuery.of(context).size.height * 0.15,
                  width: MediaQuery.of(context).size.width * 0.300,
                  child: ElevatedButton(
                    onPressed: () {
                      showDialog(
                        context: context,
                        builder: (BuildContext context) {
                          return StatefulBuilder(
                            builder: (context, setState) {
                              return AlertDialog(
                                title: Text('TV Unit Area'),
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
            Positioned(
              top: MediaQuery.of(context).size.height * 0.285,
              left: MediaQuery.of(context).size.width * 0.575,
              child: Opacity(
                opacity: 0.0,
                child: SizedBox(
                  height: MediaQuery.of(context).size.height * 0.125,
                  width: MediaQuery.of(context).size.width * 0.30,
                  child: ElevatedButton(
                    onPressed: () {
                      showDialog(
                        context: context,
                        builder: (BuildContext context) {
                          return StatefulBuilder(
                            builder: (context, setState) {
                              return AlertDialog(
                                title: Text('TV Unit Area'),
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
                    child: Text('Button 4'),
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
