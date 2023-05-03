
//////////////////////////////////////////////////////
// Guitar tones generator in JAVASCRIPT Version 4.01 
// by Jim Cranwell  (cranwell@yahoo.com) 
// This program is Copyright 2004-2014 by Jim Cranwell.
// You may not reprint or redistribute this code.
////////////////////////////////////////////////////

var capolist = "zero,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty,twentyone,twentytwo,blank,fret,xx,xxf,blue,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r1,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s1,xxx" 
var capo = capolist.split(",")
var imageDB = new Array()
for (i = 0; i < capo.length; i++) {
	imageDB[i]=new Image
	imageDB[i].src= "../gen5/" + capo[i] + ".gif"	}

function mandms(){

if (document.forms.dym.mandm.checked==1){
 imageDB = new Array()
for (i = 0; i < capo.length; i++) {
	imageDB[i]=new Image
	imageDB[i].src= "../gen/" + capo[i] + ".gif"  ;	}
		
		} else {

 imageDB = new Array()
for (i = 0; i < capo.length; i++) {
	imageDB[i]=new Image
	imageDB[i].src= "../gen5/" + capo[i] + ".gif"	;}
		}

		varyit()}//mandm

fix=1;
var toon = "EADGBE";
var pr   = 0;
var num   = new Array();
num[0] = new Array();
var prst  = new Array();
var notead  = new Array();
prst[0]  = 24;
var chordname = new Array();
chordname[pr] = " ";
var chordnotes = new Array();
chordnotes[pr] = " ";
var lefty = " ";
var pink = 0;
var L=1; var Y=1; var Z=1;
var MMM = new Array(4, 9,2,7,11,4);
var zzz     = new Array(4, 9,14,19,23,28);
var zzzplus = new Array(0, 0,12,12,12,24);
var zzzsound = new Array(46,46,46,46,46,46);
var T   = new Array(1,0,0,0,1,0,0,1,0,0,0,0);
var TCK = new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var flagit=1;
var P = new Array("C ","C#","D ","Eb","E ","F ","F#","G ","G#","A ","Bb","B ","C ","x ");
P[20] = "x ";
var K = 0;
var RIGHT  = 0;
var E = 0 ; var X = 0; 
var G = 0;
var D = 10;
var DDD = 10;
var chtext = "maj"
var chordx = "maj"
var V = 7; var VM = 1; var W = 0; var H = 0; var Q = 2; var S = 0;
var QQ = 7;
var FR = 0; var FRT = 0;
var op = 0;
var ii=25;
var tsave=0;
var rrr=0; var ddd=0;
var savirt = new Array(199,199,199,199,199,199);
var num2  = new Array(88,88,88,88,88,88);
var BA   = new Array(0,0,0,0,0,0);
var Q1  = new Array("Ø","Ø","Ø","Ø","Ø","Ø");
notes = new Array("","-9 ","add9 ","m ","","","flat5 ","","aug5 ","","7th ","maj7 ")

var FRtext = "";
var chrd = '0';
var chtext = " ";
 
var TT = tt = ttt= new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var setune="E A D G B E"
var chord="";
var Q2 = " ";
var sd = sdx = "";
var notal = new Array();
var pam = new Array("R","d2","2","m3","3","4","d5","5","a5","6","b7","7")



var form = document.forms.dym;
function tunit(){

var tuner = document.forms.dym.tuning.selectedIndex;
var tutext = document.forms.dym.tuning.options[tuner].text;
toon = tutext;
//RIGHT = document.forms.dym.hand.selectedIndex;

if (tutext=="EADGBE") {MMM = new Array(4, 9,2,7,11,4)};
if (tutext=="EBEG#BE"){MMM = new Array(4,11,4,8,11,4)};
if (tutext=="EAEAC#E"){MMM = new Array(4, 9,4,9, 13,4)};
if (tutext=="EAC#EAE"){MMM = new Array(4, 9,1,4, 9,4)};
if (tutext=="EBC#F#BE"){MMM = new Array(4,11,1,6,11,4)};
if (tutext=="EADF#BE"){MMM = new Array(4, 9,2,6,11,4)};
if (tutext=="EADGCF") {MMM = new Array(4, 9,2,7, 12,5)};
if (tutext=="DADGAD") {MMM = new Array(2, 9,2,7, 9,2)};
if (tutext=="DGCGCD") {MMM = new Array(2, 7,0,7, 12,2)};
if (tutext=="DADF#AD"){MMM = new Array(2, 9,2,6, 9,2)};
if (tutext=="DADGBE") {MMM = new Array(2, 9,2,7,11,4)};
if (tutext=="DGDGBD") {MMM = new Array(2, 7,2,7,11,2)};
if (tutext=="DACGCD") {MMM = new Array(2, 9,0,7, 12,2)};
if (tutext=="DADACD") {MMM = new Array(2, 9,2,9, 12,2)};
if (tutext=="DADGCD")  {MMM = new Array(2, 9,2,7,12,2)};
if (tutext=="DADF#C#D"){MMM = new Array(2, 9,2,6,13,2)};
if (tutext=="CEGACE") {MMM = new Array(12,16,7,9,12,4)};
if (tutext=="CGCGAE") {MMM = new Array(0, 7,0,7, 9,4)};
if (tutext=="CGDAEG") {MMM = new Array(0, 7,2,9, 16,7)};
if (tutext=="CGDGCD") {MMM = new Array(0, 7,2,7, 12,2)};
if (tutext=="CGCDGC") {MMM = new Array(0, 7,0,2, 7,0)};
if (tutext=="CGCGCE") {MMM = new Array(0, 7,0,7, 12,4)};
if (tutext=="CGEGCE") {MMM = new Array(12, 7,4,7, 12,4)};
if (tutext=="FADGBE") {MMM = new Array(5, 9,2,7,11,4)};
if (tutext=="EG#BEG#B"){MMM = new Array(4,8,11,4,8,11)};
if (tutext=="Gminor") {MMM = new Array(7,10,2,7,10,2)};
if (tutext=="nashville") {MMM = new Array(16, 21,14,19,11,4)};
if (tutext=="nashvil")   {MMM = new Array(16, 21,14,19,11,4)};
if (tutext=="GCFADG") {MMM = new Array(7,12,5,9,14,7)};
if (tutext=="ADGBEA") {MMM = new Array(9,14,7,11,16,9)};
if (tutext=="BEADF#B"){MMM = new Array(11, 16, 9,14,18,11)};
if (tutext=="Drop2")  {MMM = new Array(2, 7,0,5, 9,2)};
if (tutext=="Drop1")  {MMM = new Array(3, 8,1,6,10,3)};
if (tutext=="Capo1") {MMM = new Array(5,10,3, 8,12,5)};
if (tutext=="Capo2") {MMM = new Array(6,11,4, 9,13,6)};
if (tutext=="Capo3") {MMM = new Array(7, 12,5,10,14,7)};
if (tutext=="Capo4") {MMM = new Array(8, 13,6,11,15,8)};
if (tutext=="Capo5") {MMM = new Array(9, 14,7, 12,16,9)};
if (tutext=="Capo6") {MMM = new Array(10,15,8, 13,17,10)};   ///zzzplus = new Array(0, 12,12,24,24,24);
if (tutext=="Capo7") {MMM = new Array(11,16, 9,14,18,11)};
if (tutext=="Capo8") {MMM = new Array(12,17,10,15,19,12)};
if (tutext=="Capo9") {MMM = new Array(13,18,11,16,20,13)};


//was (RIGHT) enk serious lefty bug

if((RIGHT % 2)!=0){MMM.reverse();} setune=" "
for(d=0;d<(6);d++){setune=setune+P[MMM[d]];  zzz[d]= MMM[d] + zzzplus[d]; }
	//document.forms.dymx.result8.value =setune;
	
if (tutext=="EG#BEG#B"){
	for(bz=0;bz<(5);bz++){if (zzz[bz] > zzz[bz+1]){ zzz[bz+1] = zzz[bz+1]+12}}
	for(bz=0;bz<(5);bz++){if (zzz[bz+1] > zzz[bz]+12){zzz[bz+1] = zzz[bz+1]-12}}
						}//



		GUITAR(); }

//var zzz     = new Array(4, 9,14,19,23,28);
//var zzzplus = new Array(0, 0,12,12,12,24);
//var zzzsound = new Array(46,46,46,46,46,46);



function rever(){MMM.reverse(); zzz.reverse(); 	zzzplus.reverse(); zzzsound.reverse(); setune=" ";lefty = " ";
RIGHT += 1; 
if ((RIGHT % 2)!=0){lefty = "lefty"}
for(i=0;i<(xxx);i++){setune=setune+P[MMM[i]];}
	//document.forms.primax.result8.value =setune;
	GUITAR();}

function whatchord(){tsave=0;
T=new Array(1,0,0,0,1,0,0,1,0,0,0,0);
 
chrd=document.forms.dym.chords.selectedIndex;
chtext=document.forms.dym.chords.options[chrd].text;

if (chtext=="maj")  {T[0]=1; T[4]=1; T[7]=1 ; }
if (chtext=="min")  {T[3]=1; T[4]=0}
if (chtext=="7th" ) {T[10]=1}
if (chtext=="m7")   {T[3]=1; T[10]=1; T[4]=0}
if (chtext=="maj7") {T[11]=1}
if (chtext=="6th")  {T[9]=1}
if (chtext=="m6th") {T[3]=1; T[4]=0; T[9]=1}
if (chtext=="aug")  {T[8]=1; T[7]=0}
if (chtext=="dim")  {T[7]=0; T[6]=1 ;T[4]=0;    T[3]=1}	// dim three
if (chtext=="sus4") {T[5]=1; T[4]=0}
if (chtext=="7sus4"){T[5]=1; T[4]=0; T[10]=1}
if (chtext=="9th")  {T[2]=1; T[10]=1 }
if (chtext=="maj9") {T[2]=1; T[11]=1 }
if (chtext=="m9th") {T[2]=1; T[10]=1; T[3]=1; T[4]=0}
if (chtext=="madd9"){T[2]=1;          T[3]=1; T[4]=0}
if (chtext=="add9") {T[2]=1}
if (chtext=="sus2") {T[2]=1; T[4]=0}
if (chtext=="7sus2"){T[2]=1; T[4]=0; T[10]=1}
if (chtext=="11th") {T[2]=1; T[4]=0; T[5]=1; T[10]=1}
if (chtext=="11xt") {T[2]=1; T[4]=0; T[5]=1; T[10]=1 ; T[7]=0 }



if (chtext=="11zt") {        T[4]=1; T[5]=1; T[10]=1 ;  }



if (chtext=="m11th"){T[2]=1; T[4]=0; T[5]=1; T[10]=1 ; T[3]=1 }
if (chtext=="m11xt"){T[2]=0; T[4]=0; T[5]=1; T[10]=1 ; T[3]=1 ; T[7]=1 ;}
if (chtext=="13th") {T[2]=0; T[7]=1; T[9]=1; T[10]=1 ; T[5]=0}
if (chtext=="maj13"){T[2]=0; T[7]=1; T[9]=1; T[11]=1 ; T[5]=0}
if (chtext=="m13th"){T[2]=0; T[7]=1; T[9]=1; T[10]=1 ; T[5]=0 ;T[4]=0;T[3]=1}
if (chtext=="6/9")  {T[2]=1; T[9]=1}
if (chtext=="min6/9")  {T[2]=1; T[9]=1; T[3]=1; T[4]=0}
if (chtext=="flat5"){T[7]=0; T[6]=1}

if (chtext=="7#9")   {T[7]=0; T[10]=1;T[3]=1}
if (chtext=="7#9 w5"){T[7]=1; T[10]=1;T[3]=1}
if (chtext=="7#9 no5"){T[7]=0; T[10]=1;T[3]=1}
if (chtext=="7th/no5"){T[7]=0; T[10]=1;}


if (chtext=="5")    {T[4]=0}
if (chtext=="Ø7")   {T[7]=0; T[6]=1; T[10]=1; T[4]=0; T[3]=1; }	  // half dim
if (chtext=="dim")  {T[7]=0; T[6]=1;          T[4]=0; T[3]=1}	  // dim three
if (chtext=="dim7") {T[7]=0; T[6]=1;  T[9]=1; T[4]=0 ;T[3]=1}	  
if (chtext=="m/maj7") {T[11]=1 ;T[4]=0;T[3]=1}
if (chtext=="m/maj9"){T[2]=1; T[11]=1 ;T[4]=0;T[3]=1}
if (chtext=="7#5") {T[8]=1; T[7]=0; T[10]=1}			
if (chtext=="m7#5") {T[8]=1; T[7]=0; T[10]=1 ;T[4]=0;T[3]=1}	
if (chtext=="7b5") {T[7]=0; T[6]=1; T[10]=1}			
if (chtext=="m7b5") {T[7]=0; T[6]=1; T[10]=1 ;T[4]=0;T[3]=1}	
if (chtext=="m/maj13"){T[2]=0; T[7]=1; T[9]=1; T[11]=1 ;T[5]=0; T[3]=1; T[4]=0}
if (chtext=="7b9") {T[1]=1;T[10]=1}

if (chtext=="7b5b9") {T[1]=1;T[7]=0; T[6]=1;T[10]=1}

if (chtext=="7#11") {T[6]=1;T[10]=1}
if (chtext=="maj7#11") {T[6]=1;T[11]=1}
if (chtext=="7b9b13") {T[1]=1;T[7]=0;T[8]=1;T[10]=1}
if (chtext=="7b9/13") {T[1]=1;T[7]=0;T[9]=1;T[10]=1}
if (chtext=="7#9#11") {T[3]=1;T[6]=1;T[10]=1}

if (chtext=="mad2ad4")   {T[2]=1; T[3]=1; T[4]=0; T[5]=1}
if (chtext=="madd2add4") {T[2]=1; T[3]=1; T[4]=0; T[5]=1}
if (chtext=="add2add4")  {T[2]=1; T[5]=1;}
if (chtext=="ad2ad4")    {T[2]=1; T[5]=1;}
 
if (chtext=="add4")    {T[5]=1; }
if (chtext=="madd4")   {T[3]=1; T[4]=0; T[5]=1;}

  cccc=0;rrnd  = new Array();
  for(c=0; c<12; c++){ if (T[c]==1){rrnd[cccc] = (c+D-1)%12 + 1; cccc++  ; //alert(rrnd)
					}   }//

if(chtext=="****"){chordx=chtext=sdx; 	T = TT }//user
  chordx=chtext; TT = T; GUITAR(); return T;}


	function rand() { 
	document.forms.dym.varyL.selectedIndex  = Math.floor ((Math.random() * 24));
	document.forms.dym.notes.selectedIndex  = Math.floor ((Math.random() * 12));
	document.forms.dym.bassnotes.selectedIndex  = Math.floor ((Math.random() * 12));
	document.forms.dym.chords.selectedIndex = Math.floor ((Math.random() * 44)+1);
	document.forms.dym.frets.selectedIndex  = Math.floor ((Math.random() * 16));
	document.forms.dym.openit.checked = 1; whatchord(); }//rnd
	
	function clearitx(){
		pr=0; titleit="";	
		num = new Array();    	
		number(-1,4);
		droidnotes = new Array("x","x","x","x","x","x"); ; 
		droidurl = new Array();
		}//

	
var droidurl = "";
var droidname = ""; 
var droidnotes = new Array("x","x","x","x","x","x"); ;


function savit(){ 	


		droidurl = droidurl + droidname +"-"+ droidnotes + "-"  ; 									
		//droidurl = encodeURI(droidurl);	
		
		droidurl = droidurl.replace(/#/g,'%23');
		droidurl = droidurl.replace(/Ø/g,'1/2dim');
		droidurl = droidurl.replace(/Ø/g,'%C3%98');
		droidurl = droidurl.replace(/ /g,'');
		droidurl = droidurl.replace(/%20/g,'');


		droidurl= droidurl.replace("%20%20","%20");  
	      
		
 


// chordname[pr]=document.forms.dym.result.value
	QQ = Q;									//alert(QQ);
	//if (y != 9){QQ = y -1 };
	num[pr] = new Array();  prst[pr]  = (QQ+1)*6  
	
	if(flagit==1){
	for(b=0; b<((QQ+1)*6) ; b++ ){	
	num[pr][b] = "|";
	if(savirt[b%6]==199){num[pr][b%6] = "×"; }; 
	if((b<6)&&(!G))	{    num[pr][b] = "_"  }
	//serious length bug array was length of 199 in savirt
	if(savirt[b%6]!=199){num[pr][savirt[b%6]]="o";   };
	if((num2[b%6]==MMM[b%6])&&(G)){  num[pr][b]="¦" ; num[pr][b%6]="ø"  };
		}  //forb
		 } //if flag1
	if(flagit==2){
	for(b=0; b<((QQ+1)*6) ; b++ ){	
	num[pr][b] = "| ";
	if((b<6)&&(!G))	{    num[pr][b] = "__"  }
	if(notal[b]!=199 && document.forms.dym.shownote.checked==1){num[pr][b]=P[notal[b]]; }; 
	if(notal[b]!=199 && document.forms.dym.shownote.checked==0)
	{num[pr][b]=Math.floor(b/6)+FRT; if(Math.floor(b/6)+ FRT < 10){num[pr][b]+= " " } };	
		 } //forb
		 } //if flag2
	if(chordname[pr]){pr = pr + 1;} 
										//alert(num); 
	} // savit

function fs(fff){rrr=0; 
		document.getElementById('a1').style.backgroundColor='#fcfcfc'
	if (document.forms.dym.shownote.checked==1){rrr=28; 
		document.getElementById('a1').style.backgroundColor='#f5f5ff'
		}//
 	if (document.forms.dym.shownote.checked==1 && FRT > 0){rrr=28; 
		document.getElementById('a1').style.backgroundColor='#eeeeee'
		}//	

if (fff=='1'){P=new Array("C ","C#","D ","D#","E ","F ","F#","G ","G#","A ","A#","B ","C ","x ")}
if (fff=='0'){P=new Array("C ","Db","D ","Eb","E ","F ","Gb","G ","Ab","A ","Bb","B ","C ","x ")}
	 P[20] = "x ";  //binaar(ttt); 
				GUITAR(); 
					}




function vboy(V){
ffr=4;eig=8; xxx=6
if(V==0) {L=1;    Y=ffr;    Z=1;}
if(V==1) {L=1;    Y=ffr;    Z=7;}
if(V==2) {L=1;    Y=ffr;    Z=11;}
if(V==3) {L=xxx-1;Y=ffr;    Z=1;}
if(V==4) {L=xxx-1;Y=ffr;    Z=7;}
if(V==5) {L=xxx-1;Y=ffr;    Z=11;}
if(V==6) {L=1;    Y=xxx*eig;Z=1;}
if(V==7) {L=1;    Y=xxx*eig;Z=7;}
if(V==8) {L=1;    Y=xxx*eig;Z=11;}
if(V==9) {L=xxx-1;Y=xxx*eig;Z=1;}
if(V==10){L=xxx-1;Y=xxx*eig;Z=7;}
if(V==11){L=xxx-1;Y=xxx*eig;Z=11;}
if(V==12){L=1;    Y=ffr;    Z=1;}
if(V==13){L=1;    Y=ffr;    Z=7;}
if(V==14){L=1;    Y=ffr;    Z=11;}
if(V==15){L=xxx-1;Y=ffr;    Z=1;}
if(V==16){L=xxx-1;Y=ffr;    Z=7;}
if(V==17){L=xxx-1;Y=ffr;    Z=11;}
if(V==18){L=1;    Y=xxx*eig;Z=1;}
if(V==19){L=1;    Y=xxx*eig;Z=7;}
if(V==20){L=1;    Y=xxx*eig;Z=11;}
if(V==21){L=xxx-1;Y=xxx*eig;Z=1;}
if(V==22){L=xxx-1;Y=xxx*eig;Z=7;}
if(V==23){L=xxx-1;Y=xxx*eig;Z=11;}
VM=1; if(V>11){VM=-1}
return L;Y;Z;VM ;}
			
	function varyit(V) { pxx = chordnotes[pr];
		for(ii=0; ii<13; ii++ ){	//alert("varyit(V)= "+ X) 
		V=document.forms.dym.varyL.selectedIndex;
		V=(V+1)%24; 
		document.forms.dym.varyL.selectedIndex=V;
		GUITAR();  
		if( pxx != chordnotes[pr]){pxx = chordnotes[pr]; ii=25; break};
				}}//varyit    


function GUITAR(){ flagit=1;  droidnotes = new Array("x","x","x","x","x","x"); 

					 // alert("guitar")
	 
	DDD = D = document.forms.dym.notes.selectedIndex  ;
	var Dtext = document.forms.dym.notes.options[D].text;
	Q = document.forms.dym.varyQ.selectedIndex;
	//Q = Q+2  ;
	op = document.forms.dym.openit.checked;
	FRT = document.forms.dym.frets.selectedIndex;
	FRtext = document.forms.dym.frets.options[FRT].text;
	   G      = 0;
	var A      = 0;
	if(FRT)  {G = 1 };	
	if(document.forms.dym.chords.selectedIndex ==0){
		document.forms.dym.force.checked= 0; document.forms.dym.bass.checked= 0}//user	

	L=1; Y=1; Z=1;
	V = document.forms.dym.varyL.selectedIndex;
	vboy(V);
	Y = Y + Q;  K = 0; W = D-Z; H= 0-Z; 
	savirt = new Array(199,199,199,199,199,199); 
	num2   = new Array(88,88,88,88,88,88);	
	BA  = new Array(0,0,0,0,0,0);	
	var BN  =  document.forms.dym.bassnotes.selectedIndex;
	BN = BN%12
	var BNN    = 0;
	var btext = "";
	TCK    = new Array(0,0,0,0,0,0,0,0,0,0,0,0);
	E = 0 ; //E= E-VM; 
	X=0;
			
  for(jj=0; jj<21; jj++ ){A = 0;   
	for(bb=0; bb<6; bb++ ){	if(savirt[bb]!=199 || BA[bb]==1)  {A = A+1;}}//forbbb	
	
	if((A==6)||(jj>19)){ // alert(TCK + "\n" +T)
		//document.forms.primax.result7.value =jj;
	if (TCK.toString()==T.toString()){
		ttt = new Array(0,0,0,0,0,0,0,0,0,0,0,0);
		for (jc=0;jc<6;jc++) { if (num2[jc]!=88){ttt[num2[jc]] =1 }} ;
		//clearit();  binaar(ttt); 
		//document.forms.primax.res99.value =TT;
					jj=401;  }//mega();
	else {jj=0; //alert("else "+ X)
		savirt = new Array(199,199,199,199,199,199); 
		num2   = new Array(88,88,88,88,88,88);	
		TCK    = new Array(0,0,0,0,0,0,0,0,0,0,0,0);
		BA = new Array(0,0,0,0,0,0); BNN =0; docitx();
		V=document.forms.dym.varyL.selectedIndex;
		V=(V+1)%24; ii=ii+1
		document.forms.dym.varyL.selectedIndex=V;
		vboy(V);	X = X+1; 	
		if( X>18){ BA = new Array(1,1,1,1,1,1); jj=401; ii=25; break} 
				}//else
				}//ifA

		S = 0; W=(W+Z)%12; H=(H+Z)%12;  rrr=0;ddd=0
	if (document.forms.dym.shownote.checked==1){rrr=28;ddd=W}

    	 while(S<Y){S=S+1; 
			if(E>Q){E= 0; K=(K+L)%6 }
			if(E<0){E= Q; K=(K+L)%6 }
		
		 if((T[H]==0)){
		  for(c=0; c<12 ; c++ ){
		  W=(W+Z)%12; H=(H+Z)%12; 
		  	if(T[H]==1){c= 401; if(rrr){ddd=W;} }
     				  }} //if[th]==0
		
		 if(savirt[K] != 199 || BA[K]==1){ 
		 for(b=0; b<6; b++ ){K=(K+L)%6;
		 if(savirt[K] == 199 && BA[K]==0){b= 401;} 
		 if(b==5) {S= 401}}}
		
		var F = (MMM[K]+E+FRT)%12 ; 	//**j¤øº°©®¦¡¡·  alert(BA)
	
	if ((document.forms.dym.force.checked==1 || document.forms.dym.bass.checked==1) && BNN==0){
	if (document.forms.dym.force.checked){document.forms.dym.bassnotes.selectedIndex=BN=D%12}//
	E=0; K=0; pm=1;
	if ((RIGHT % 2)!=0){K=5; pm=-1}
	BA[K]=1;
	if (op){
	while (BN != (MMM[K])%12 && BN != (MMM[K]+E+FRT)%12 && K<6){E++;
	if(E>Q){E=0; notead[K]=P[13]; BA[K]=1; K=K+pm;}	}}//while
	else{
	while (BN != (MMM[K]+E+FRT)%12 && K<6){E++; 
	if(E>Q){E=0; notead[K]=P[13]; BA[K]=1; K=K+pm;}	}//while
	}//else
	if (K<6){
	for(c=0; c<15; c++ ){
	if (BN==(W+c)%12){W=(W+c)%12; H=(H+c)%12; c=401; }  }//for
	BA[K]=1;
	if (BN!=D%12){btext = "/"+P[W]}; F = W }//ifK
	//document.forms.primax.res6.value =BA	;	
			BNN = 1;   }//bass
	
	if((W==(MMM[K])%12 )&&(savirt[K]==199 )&&(op)){

		droidnotes[K]=0;   //alert( droidnotes);

	for(d=0; d<(y); d++){document.images[d*6+K+fix].src = imageDB[27].src;};
	notead[K] = P[W];    zzzsound[K]= zzz[K] ;						//alert(zzz)
					// H was ddd locked color -new 
	if (document.forms.dym.shownote.checked==1){document.images[K+fix].src = imageDB[rrr+H+13].src}
	//if (document.forms.dym.shownote.checked==1){document.images[K+fix].src = imageDB[rrr+ddd+13].src}
	

	if (document.forms.dym.shownote.checked==0){document.images[K+fix].src = imageDB[0].src}
	
	savirt[K]=K; num2[K]=W ; 
	if (T[H]==1){TCK[H]=1} ;  S=401  }//
 	
	if((W==F)&&(savirt[K]==199)){ docitjen(); 	droidnotes[K]=E+FRT;   //alert( droidnotes);	


	savirt[K]=((E)*6+K); num2[K]=W; notead[K]= P[W];
	if (T[H]==1){TCK[H]=1} ; S=401} //ifw==f 
		E= E+VM;}//while S
				}//forj
	
	if(chtext=="maj"){chtext=""};	prr=" "
	for(d=0; d<6 ; d++ ){prr = prr + notead[d]+ " " }
	
	//document.forms.primax.pichord.value = 
	chordname[pr] = document.forms.dym.result.value =" "+P[D]+""+chtext+btext+" "+"fr-"+FRtext ;

	droidname = P[D]+""+chtext+btext ;  			// alert(chtext);

	
	//droidname = P[D]+"%20"+chtext+btext.replace(" ","%20"); ;  			// alert(chtext);
	droidname= droidname.replace(" ","%20");       
	droidname= droidname.replace("%20%20","%20");   



	chordnotes[pr]= document.forms.dym.result2.value = prr;
	 docitx();	
				
		if (document.forms.dym.onmouse.checked == 1){modes3(0);}
			}//**guitar

		//   23=blank  24=fret  25=xxx  26=xxxf  27=blue	

	function docitx(){
	for(d=0; d<6; d++){ notead[d] = P[13]; 
		if(savirt[d]==199){    zzzsound[d]= 401;//   90-36;  looking for the blank      // num2[d]==88;
	for(ee=0; ee<y; ee++){
		if(ee<y){document.images[ee*6+d+fix].src = imageDB[54].src }
	   	// if(ee>y){document.images[ee*6+d+fix].src = imageDB[23].src}
		}//foree
		document.images[d+fix].src  = imageDB[25].src;	
		if(G){document.images[d+fix].src  = imageDB[26].src;	}
		}//if
		}//for
		}//doc

	function docitjen(){     zzzsound[K]= zzz[K] + E+FRT ;        //alert()alert(zzzsound)        
		for(d=0; d<(y); d++ ){
	if ((d>0 || G)&&(d<y)){document.images[d*6+K+fix].src = imageDB[24].src;}
		// if(DDD>y+1){document.images[d*6+K+fix].src = imageDB[23].src;}
		}//ford
	if (!G)  {document.images[K+fix].src = imageDB[23].src;}
	
	//rrr equals shownotes
	//if (!rrr && E==0){document.images[(E)*6+K+fix].src = imageDB[H+38].src;}
		
	//if (rrr) {document.images[(E)*6+K+fix].src = imageDB[(MMM[K]+E+FRT)%12+rrr].src;}// locked color

	if (rrr && E == 0) {document.images[(E)*6+K+fix].src = imageDB[(H)%12+rrr+13].src;}
	if (rrr && E > 0 || G)  {document.images[(E)*6+K+fix].src = imageDB[(H)%12+rrr].src;}
	
	
	if (!rrr){document.images[(E)*6+K+fix].src = imageDB[E+FRT].src;}
		notead[K]= P[W];		}//docitjen
	

var tiid = null; //
var tm=  100; 	 //
var durit=  0; 	 //

	
	function durr(){z =document.forms.dym.dur.selectedIndex; 
	if (z==0){tm=1000};
	if (z==1){tm=500};
	if (z==2){tm=250};
	if (z==3){tm=100};
	if (z==5){tm=166};
	if (z==4){tm=0};	}//	



function modes(){ 
	for(d=0;d<(6);d++){ 

	if (zzzsound[d] !=401 && zzzsound[d] < 80){  playit(zzzsound[d]); }// 	
		}//
				}//modes

function modes3(){ clearTimeout(tiid);
	durit=0; modes2();
				}//modes

function modes2(){  						// alert(zzzsound);

		if (zzzsound[durit] !=401 && zzzsound[durit] < 80){  playit(zzzsound[durit]); }// 
		 durit++;   

		tiid = setTimeout("modes2()", tm);          
 		if (durit>5){clearTimeout(tiid);}
				}//modes

function number(z,FRT) {
	FR = Math.floor(z/6) + FRT;
	//document.forms.primax.result7.value =P[(MMM[z%6]+FR)%12];
		}//number


var nameit="";
var titleit="";
if (typeof poptext == 'undefined'){ 
var poptext = ' zero slash  Ø ¦  dash, means play an open string, no matter what the fret, ...babette. <br>';};
function titler(){titleit=window.prompt("name or title?",titleit);}

function newin(num,pr){
var wingen = window.open("", "wingen", "scrollbars=yes,toolbar=no,menubar=yes,resizable=yes,top=5,left=5,width=750,height=450"); 
var gen = wingen.document; 
gen.open("text/html", "replace");wingen.focus();
if (titleit.length>0){gen.write("<html><head><title>" +titleit+ "</title>");}
else{gen.write("<html><head><title>" +chordname[0]+"</title>");}
gen.write("<style>body,p,td{font-family:verdana,Lucida Console,monospace,courier;font-size:13px;}</style>");

gen.write("<style>u,br{font-family:monospace,Lucida Console,courier;font-size:20px;line-height:.8}</style>");

gen.write("<style>a:visited{text-decoration:none;color:blue} a:link{text-decoration:none;color:blue}</style>");
gen.write("</head><body bgcolor='#ffffff'>");
gen.writeln("&nbsp;<a href='http://www.gravityboy.com'>http://www.gootar.com</a> ~~~ " + titleit + " ~~~ ");

droidurl = droidurl.replace(/#/g,'%23');
droidurl = droidurl.replace(/Ø/g,'1/2dim');
droidurl = droidurl.replace(/Ø/g,'%C3%98');
droidurl = droidurl.replace(/ /g,'');
droidurl = droidurl.replace(/\//g,'%2F');


droidurl = droidurl.replace(/%20/g,'');
gen.writeln(" <br><a href=http://www.gootar.com/folder5/chords.php?"+droidurl.replace(' ','%20')+">Hear these chords now</a> or right-click copy paste this link and Send (email) Chords to iPhone");


gen.write("<table width='100%'><tr><td bgcolor='#ccddcc'>");

gen.writeln("&nbsp;custom chord chart");
gen.writeln(" || " + toon + " tuning || " + lefty + "");
gen.writeln("</td></tr></table>|  by jim cranwell " + nameit + " | &copy " +Date()+ " | goddess 4Ø1 | <a href='http://www.gravityboy.com'>www.gravityboy.com</a>");
gen.writeln("<hr noshade size=1 color=#dddddd> ");
gen.writeln("<table border='0' cellspacing='09' cellpadding='9' bgcolor='#f7f7f7'> ");
gen.writeln("<tr>");

for (a=0;a<pr;a++) {
if((a%5==0)&&(a!=0)){gen.writeln("</tr></table><table border='0' bgcolor='#f7f7f7' cellspacing='09' cellpadding='9'><tr>");}//**ifpr
gen.writeln("<td valign=top nowrap bgcolor='#ffffff'><center>");
gen.write(chordname[a]);
gen.writeln("<br>");
gen.write(chordnotes[a]);

if(chordnotes[a]!="scale"){gen.write("<u>");}
else { gen.write("</center><u>");}

for (j=0;j<prst[a];j++) {
if(j%6==0){gen.writeln("<br>");}//**ifj

 //  gen.write("<img src='../gen5/" + capo[num[a][j]] + ".gif' border=0 width=23 height=28>") 

gen.write(num[a][j]);



}//**forj

gen.write("</u></td>");	}//**fora

gen.writeln("</tr>");
gen.writeln("</table>");
gen.writeln("<center><hr noshade size=1 color=#dddddd> </font>");



gen.writeln(poptext);
gen.writeln("| tb vb ds jz kl enk no msg " +Date()+ "  |");
gen.writeln(" <a href=javascript:void('') onClick='window.print()'>print this page</a>");

//gen.writeln("<script language='JavaScript' src='http://www.gootar.com/googlead.js'><\/script>");

gen.writeln("<br><br>");

gen.writeln("\<script language='JavaScript'\> ");	  
gen.writeln("google_ad_client = 'pub-9314621369422855';");
//gen.writeln("/* 468x60, created 12/6/09 */");
gen.writeln("google_ad_slot = '9121139249';");
gen.writeln("google_ad_width = 728;");
gen.writeln("google_ad_height = 90;");
gen.writeln("<\/script>");		

gen.writeln("\<script type='text/javascript' src='http://www.gootar.com/blank.js'\>");
gen.writeln("\</script\>");

gen.writeln("<br><br>");

gen.writeln("</body></html>");
gen.close();
											//alert(num);			
}




