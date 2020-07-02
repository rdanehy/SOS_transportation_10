/*Seat Sensor
 * 
 */
int Pin1 = 0;
void setup() {
  Serial.begin(9600);
  
}

void loop() {
  int sensorval = analogRead(Pin1);
  Serial.println(sensorval);
  delay(100);
}
