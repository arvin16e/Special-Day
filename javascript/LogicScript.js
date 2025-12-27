        
       const photos = [
                        {
                            img : "images/ArviPP.jpg",
                            text : "Everything beautiful begins here"
                        },
                        {
                            img : "images/ArviPP.jpg",
                            text : "Little memories that built you"
                        },
                        {
                            img : "images/ArviPP.jpg",
                            text : "Those growing years"
                        },
                        {
                            img : "images/ArviPP.jpg",
                            text : "Dreams taking shape"
                        },
                        {
                            img : "images/ArviPP.jpg",
                            text : "Still chasing them"
                        },
                        {
                            img : "images/ArviPP.jpg",
                            text : "And today… it’s YOU 🎉"
                        }

                    ];

                    let currentIndex = -1;
       
       
       const date="0801";
        let regex=/^[0-9]+$/;
        console.log('Hello World');
        let btnContinue=document.getElementById("continue");
        console.log(btnContinue);
        btnContinue.addEventListener("click" , () => {
            window.location.assign("Verify.html");
        });

       
        let btnMaybelater = document.getElementById("maybelater");
         console.log(btnMaybelater);
        btnMaybelater.addEventListener("click" , () => {
            window.location.assign("MaybeLaterResponse.html");
        });
  
        document.getElementById("otpInput1").addEventListener("input" , () => {
            let inputvalue=document.getElementById("otpInput1").value;
            if(!regex.test(inputvalue)){
                document.getElementById("wrongInput").innerText = "Digits Only";
            }
           
        });
       

        function verifyOtp(){
            let btnSubmit1=document.getElementById("otpInput1");
           // console.log(btnSubmit);
            const inputotp1=btnSubmit1.value;
            let btnSubmit2=document.getElementById("otpInput2");
             const inputotp2=btnSubmit2.value;
            let btnSubmit3=document.getElementById("otpInput3");
             const inputotp3=btnSubmit3.value;
            let btnSubmit4=document.getElementById("otpInput4");
             const inputotp4=btnSubmit4.value;
         //   console.log(inputotp);
            if(inputotp1==date[0] && inputotp2==date[1] && inputotp3==date[2] && inputotp4==date[3]){
                window.location.assign("Countdown.html");
            }else{
                document.getElementById("wrongInput").innerText = "Wrong input , try again";
            }
        }
       


        
    function theme(){
            var count=0;
            var intervalId= setInterval(timer , 1000);
        function timer(){
                count++;
                let element=document.getElementById("theme1");
                if(count==1){
                    element.innerText="Just a moment…";
                }else if(count == 2){
                    element.innerText="Something special is loading…";
                }else if(count == 3){
                     element.innerText="Made only for you";
                }else if(count == 4){
                 //   element.innerText="🎁";
                 element.innerHTML= '<a href="#" id="gift" style="text-decoration:none">🎁</a>';
                                
                    document.addEventListener("click", (e) => {
                        if (e.target.id === "gift") {
                            currentIndex = 0;
                            renderPhoto();
                        }

                        if (e.target.id === "next") {
                            currentIndex++;
                            renderPhoto();
                        }

                        if (e.target.id === "prev") {
                            currentIndex--;
                            renderPhoto();
                        }

                        if (e.target.id === "wish") {
                            showFinalWish();
                        }
                    });

      /*      document.getElementById("gift").addEventListener("click" , () => {
            element.innerHTML = `<img src="/WIN_20250114_12_53_48_Pro.jpg" alt="Mummy Daddy" / width = "100px" height = "100px"> 
            <p>Everything beautiful begins here</p>
            <button id="photo1">Next</button>` ;

                document.getElementById("photo1").addEventListener("click",()=> {
                    element.innerHTML=`<img src="/WIN_20250114_12_53_48_Pro.jpg" alt="AksharaChildhood" / width = "100px" height = "100px">
                    <p>Aksharachildhood</p> 
                    <button id="_photo1">Previous</button>
                    <button id="photo2">Next</button>`
                    ;
                    
                    document.getElementById("photo2").addEventListener("click" , ()=>{
                    element.innerHTML=`<img src="/WIN_20250114_12_53_48_Pro.jpg" alt="AksharaSchool" / width = "100px" height = "100px">
                    <p>AksharaSchool</p> 
                    <button id="_photo2">Previous</button>
                    <button id="photo3">Next</button>`;

                        document.getElementById("photo3").addEventListener("click" , ()=>{
                        element.innerHTML=`<img src="/WIN_20250114_12_53_48_Pro.jpg" alt="AksharaBucket" / width = "100px" height = "100px">
                        <p>AksharaBucket</p> 
                        <button id="_photo3">Previous</button>
                        <button id="photo4">Next</button>`;

                            document.getElementById("photo4").addEventListener("click" , ()=>{
                            element.innerHTML=`<img src="/WIN_20250114_12_53_48_Pro.jpg" alt="AksharaCollege" / width = "100px" height = "100px">
                            <p>AksharaCollege</p> 
                            <button id="_photo4">Previous</button>
                            <button id="photo5">Next</button>`;

                                document.getElementById("photo5").addEventListener("click" , ()=>{
                                element.innerHTML=`<img src="/WIN_20250114_12_53_48_Pro.jpg" alt="AksharaCollege2" / width = "100px" height = "100px">
                                <p>AksharaCollege2</p> 
                                <button id="_photo5">Previous</button>
                                <button id="photo6">Next</button>`;

                                    document.getElementById("photo6").addEventListener("click" , ()=>{
                                    element.innerHTML=`<img src="/WIN_20250114_12_53_48_Pro.jpg" alt="AksharaBirthdayPic" / width = "100px" height = "100px">
                                    <p>AksharaBirthdayPic</p> 
                                    <button id="_photo6">Previous</button>
                                    <button id="Wishes">Next</button>`;

                                        document.getElementById("Wishes").addEventListener("click" , ()=>{
                                        element.innerHTML=
                                        "<p>Wishing you many more happy returns on the day</p>"
                                        
                    
                                        });
                            
                                    });
                            
                                });
                            
                            });


                        });

                    });

               
                });

                
            });  */
                }
                else{
                    clearInterval(intervalId);
                }
                
        } 



        
    }


  
    function renderPhoto() {
  const el = document.getElementById("theme1");

  const photo = photos[currentIndex];

  el.innerHTML = `
    <img src="${photo.img}" width="200">
    <p>${photo.text}</p>

    <div>
      ${currentIndex > 0 ? `<button id="prev">Previous</button>` : ""}
      ${currentIndex < photos.length - 1 
        ? `<button id="next">Next</button>` 
        : `<button id="wish">Final Wish 🎂</button>`}
    </div>
  `;
}

function showFinalWish() {
  const el = document.getElementById("theme1");
  el.innerHTML = `
    <h2>Happy Birthday Akshara 🎉</h2>
    <p>Some people are born special.  
    You’re one of them 💫</p>
  `;
}

        
        // Everything beautiful begins here
