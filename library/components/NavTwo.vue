<template>
    <div class="flex justify-between items-center px-[100px] py-[5px] content" style="background-color:white;">
        <img src="/images/logo.png" class="w-[15%]"/>
        <ul class= "flex items-center justify-center flex-nowrap gap-x-[0px]">
            <li 
                class="mr-1 md:mr-7 font-medium cursor-pointer w-[60px]  transition duration-100 text-center flex-nowrap text-sm text-white min-w-[14%] bg-primary rounded-5 py-2 ">
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li 
                class="mr-1 md:mr-7 font-medium cursor-pointer  text-center flex-nowrap text-sm w-[70px] transition duration-100 hover:text-white hover:bg-primary hover:rounded-5 min-w-[14%] hover:py-2 ">
                <nuxt-link to="Explore">Explore</nuxt-link>
            </li>
            <li 
                class="mr-1 md:mr-7 font-medium cursor-pointer w-[110px] transition duration-100 text-center flex-nowrap text-sm hover:text-white hover:bg-primary hover:rounded-5 min-w-[14%] hover:py-2 ">
                <nuxt-link to="ItemDetails">Item Details</nuxt-link>
            </li>
            <li 
                class="mr-1 md:mr-7 font-medium cursor-pointer	w-[60px] transition duration-100 text-center flex-nowrap text-sm hover:text-white hover:bg-primary hover:rounded-5 min-w-[14%] hover:py-2 ">
                <nuxt-link to="Author">Author</nuxt-link>
            </li>
            <li 
                class="mr-1 md:mr-7 font-medium cursor-pointer w-[110px] transition duration-100 text-center flex-nowrap text-sm hover:text-white hover:bg-primary hover:rounded-5 min-w-[14%] hover:py-2 ">
                <nuxt-link to="CreateYours">Create Yours</nuxt-link>
            </li>
        </ul>
        <div class="burger-icon">
                <span></span>
                <span></span>
                <span></span>
        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style scoped>
.burger-icon {
position: relative;
height: 20px;
cursor: pointer;
width: 4%;
right: 30px;
display: none;
}
a {
color: black;
text-decoration: none;
}
.active , a:hover {
color: white;
}
.router-link-exact-active{
color: white;
background-color: #7453fc;
}
.router-link-active  {
color: white;
background-color: #7453fc;
}
.burger-icon span {
position: absolute;
left: 0;
height: 2px;
background-color:primary;
transition: 0.3s ease;
-webkit-transition: 0.3s ease;
-moz-transition: 0.3s ease;
-ms-transition: 0.3s ease;
-o-transition: 0.3s ease;
}
.burger-icon span:first-child{
top: 0;
width: 180%;
}
.burger-icon span:nth-child(2){
top: 10px;
width: 230%;
}
.burger-icon span:last-child{
top: 20px;
width: 180%;
}
@media (min-width: 700px){
.burger-icon span:first-child{
top: 0;
width: 100%;
}
.burger-icon span:nth-child(2){
top: 10px;
width: 150%;
}
.burger-icon span:last-child{
top: 20px;
width: 100%;
}
}
.burger-icon:hover span:nth-child(2){
opacity: 0;
}
.burger-icon:hover span:first-child,
.burger-icon:hover span:last-child{
top: 10px;
}
.burger-icon:hover span:first-child{
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
-moz-transform: rotate(45deg);
-ms-transform: rotate(45deg);
-o-transform: rotate(45deg);
height: 3px;

}
.burger-icon:hover span:last-child{
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
-moz-transform: rotate(-45deg);
-ms-transform: rotate(-45deg);
-o-transform: rotate(-45deg);
height: 3px;
}

@media (max-width : 992px){
.content {
    margin : 0 ;
    border-radius: 0;
    margin-top: -30px;
}
ul {
    display: none
}
.burger-icon {  
    display:block
}
.burger-icon:hover .content{
    flex-direction: column;
}
.burger-icon:hover ul{
    display: flex  ;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 400px;
    width: 400px;
    text-align: center;
}
}
</style>