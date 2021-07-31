var images =
[
   "https://drive.google.com/uc?export=download&id=1rS8O0hQW7TS4-ZxThpLsUFVcvxsNgmJT" ,
   "https://drive.google.com/$typettps://drive.google.com/uc?export=download&id=1rS8O0hQW7TS4-ZxThpLsUFVcvxsNgmJ",
"https://drive.google.com/uc?export=download&id=1vnwp4D5Rf46dE6qH6Q6jfB2jCUM4z1tT",
   "https://drive.google.com/uc?export=download&id=1qS9LVz2m1ZoPSTxFKl85dMMGJH7FwQVt",
   "https://drive.google.com/uc?export=download&id=107ahTaxKAO253oJWYAyOa9sWhuauOJiB"];

   var names = ["Family Book","Mohit Sharma","Rajni Sharma","Kapil Sharma","Vandana Sharma","Om Prakash Sharma"];

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