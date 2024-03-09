import 'dart:ui';

import 'package:flutter/material.dart';
import 'dart:math';
import 'package:camera/camera.dart';

class Room extends StatefulWidget {
  const Room({super.key});

  @override
  State<Room> createState() => _RoomState();
}

class _RoomState extends State<Room> {
  final double buttonSize = 50.0;
  final Color buttonColor = Colors.blue;
  late CameraController _cameraController;
  late Future<void> _initializeCameraControllerFuture;

  @override
  void initState() {
    super.initState();
    _initializeCamera();
  }

  Future<void> _initializeCamera() async {
    final cameras = await availableCameras();
    final firstCamera = cameras.first;

    _cameraController = CameraController(
      firstCamera,
      ResolutionPreset.medium,
    );

    _initializeCameraControllerFuture = _cameraController.initialize();
  }

  @override
  void dispose() {
    _cameraController.dispose();
    super.dispose();
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
                  'assets/images/room_one.png',
                  width: double.infinity,
                  fit: BoxFit.contain,
                ),
              ),
            ),
            Positioned(
              top: MediaQuery.of(context).size.height * 0.255,
              left: MediaQuery.of(context).size.width * 0.2,
              child: SizedBox(
                height: MediaQuery.of(context).size.height * 0.15,
                width: MediaQuery.of(context).size.width * 0.35,
                child: ElevatedButton(
                  onPressed: () {
                    showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: Text('Dialog Title'),
                          content: Text('This is a dialog'),
                          actions: [
                            IconButton(
                              icon: Icon(Icons.add),
                              onPressed: () async {
                                await _initializeCameraControllerFuture;
                                Navigator.pop(context); // Close dialog
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => CameraScreen(
                                        cameraController: _cameraController),
                                  ),
                                );
                              },
                            ),
                          ],
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
            Positioned(
              top: MediaQuery.of(context).size.height * 0.515,
              left: MediaQuery.of(context).size.width * 0.45,
              child: SizedBox(
                height: MediaQuery.of(context).size.height * 0.10,
                width: MediaQuery.of(context).size.width * 0.35,
                child: ElevatedButton(
                  onPressed: () {
                    showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: Text('Dialog Title'),
                          content: Text('This is a dialog'),
                          actions: [
                            IconButton(
                              icon: Icon(Icons.add),
                              onPressed: () async {
                                await _initializeCameraControllerFuture;
                                Navigator.pop(context); // Close dialog
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => CameraScreen(
                                        cameraController: _cameraController),
                                  ),
                                );
                              },
                            ),
                          ],
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
            Positioned(
              top: MediaQuery.of(context).size.height * 0.65,
              left: MediaQuery.of(context).size.width * 0.4,
              child: SizedBox(
                height: MediaQuery.of(context).size.height * 0.08,
                width: MediaQuery.of(context).size.width * 0.35,
                child: ElevatedButton(
                  onPressed: () {
                    showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: Text('Dialog Title'),
                          content: Text('This is a dialog'),
                          actions: [
                            IconButton(
                              icon: Icon(Icons.add),
                              onPressed: () async {
                                await _initializeCameraControllerFuture;
                                Navigator.pop(context); // Close dialog
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => CameraScreen(
                                        cameraController: _cameraController),
                                  ),
                                );
                              },
                            ),
                          ],
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
          ],
        ),
      ),
    );
  }
}

class CameraScreen extends StatelessWidget {
  final CameraController cameraController;

  const CameraScreen({Key? key, required this.cameraController})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Camera Screen')),
      body: FutureBuilder<void>(
        future: cameraController.initialize(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            return CameraPreview(cameraController);
          } else {
            return Center(child: CircularProgressIndicator());
          }
        },
      ),
    );
  }
}
