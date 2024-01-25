const ptr = prompt("Enter your percentage");

    if(ptr < 40){
        document.write("Sorry, you have failed, PLease try again");
    }
    else if(ptr >= 40 && ptr < 50){
        document.write("You have passed. TRy Work Hard!");
    }
    else if(ptr >= 50 && ptr < 60){
        document.write("Grade C");
    }
    
    else if(ptr >= 60 && ptr < 70){
        document.write("Grade B");
    }
    
    else if(ptr >= 70 && ptr < 80){
        document.write("Grade AA");
    }

    else if(ptr >= 80 && ptr < 100){
        document.write("Grade A-One");
    }
    
    
    