var images =
[
   "MohitSharma.png" ,
   "RajniSharma,png",
"KapilSharma.png",
   "VandanaSharma.png",
   "O.PSharma.png"];

   var names = ["Mohit Sharma","Rajni Sharma","Kapil Sharma","Vandana Sharma","Om Pakash Sharma"];

  
   var i = 0;
   function update()
   {
       i++;
       var numbers_of_family_member_in_an_array = 5
       if(i > numbers_of_family_member_in_an_array )
       {
           i = 0;
       }
       var UpdatedImage = images[i];
       var UpdatedName = names[i];
       document.getElementById("family_member_image").src = UpdatedImage;
       document.getElementById("family_member_name").innerHTML = UpdatedName;
       
   }