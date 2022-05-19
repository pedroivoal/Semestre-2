import 'dart:io';
void main () {

  stdout.write ('Primeiro Número:   '); 
  var primeiro= stdin.readLineSync();
  double p = double.parse (primeiro!); 

  stdout.write ('Segundo Número:   '); 
  var segundo= stdin.readLineSync(); 
  double s = double.parse (segundo!);
  
  double x= p-s; 

    print ('Subtração do primeiro pelo segundo:' + x.toStringAsFixed(1));
                                                                
}