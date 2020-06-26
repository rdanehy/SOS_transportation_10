int myInts[6];//array initialized with no elements but of size 6
int myPins[] = {2, 4, 8, 3, 6};//array initialized with elements and implied size of 5
float myFloats[9]  {1.2,3.4,5.6,7.8,9.9,8.7,7.6,5.4,3.2};//initialize array with elements and size 9
char message[6]="hello";//array with size of 6, on emore element to hold null character
  
void setup() {
  Serial.begin(9600);
  delay(1000);//wait one second before printing
  int i;
  Serial.println("myInts");
  for (i = 0; i < 6; i=i +1) {
    myInts[i]=5*i;//give each index in myInts an element value
    Serial.println(myInts[i]);//print the elements of the array to the serial monitor
  }
  Serial.println("myPins");
  for (i = 5; i >=1; i = i-1) {
    Serial.println(myPins[i-1]);//print the elements of the my in reverse order
  }
  Serial.println("myFloats");
  for (i = 0; i <=2; i++) {
  Serial.println(myFloats[3*i]);//print every third element of myF1
}
  Serial.println("message");
  for (i = 0; i <=2; i++) {
    Serial.print(message[i]);
    Serial.print(message[5-i]);
    Serial.println();
  }
}
void loop() {
  // put your main code here, to run repeatedly:

}
