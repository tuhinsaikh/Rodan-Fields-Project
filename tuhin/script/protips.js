//navbar importing--------------------->
import {blogPageNavbar} from "../components/blog_navbar.js";
document.getElementById("blog_navbar").innerHTML = blogPageNavbar();

//left side blogs----------->

let leftBlog = [
    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/04/Blog_How-To-Do-Your-Eyebrows-Tips-Tricks-image-550x550.jpg",
    p1 : "August 16th, 2021",
    h3:"How To Do Your Eyebrows: Tips & Tricks",
    p2:"Stars of the skincare world, serums get a lot of press. And for good reason! What are serums? Serums are high-powered, concentrated fluids that are a must-have step in your...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/12/Dec_HolidayGiftGuide-550x550.jpg",
    p1 : "July 13th, 2021",
    h3:"Why Am I Breaking Out? 6 Unexpected Reasons (& Solutions!)",
    p2:"Summer is finally here! Skin care enthusiasts already know that when it comes to summer skincare, it’s all about sunscreen, covering up with protective clothing, hats and avoiding the sun. Especially...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/08/Blog_How-to-Get-Even-Skintone-image-550x550.jpg",
    p1 : "June 23rd, 2021",
    h3:"How to Minimize Pores: Tips & Tricks that Work",
    p2:"Dealing with irritated skin? Whether you’re experiencing irritation on your face or body, the right remedies can help you soothe your skin—fast. Here’s a guide on getting quick relief.  ...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/07/Image20210729142439-550x550.jpg",
    p1 : "May 4th, 2021",
    h3:"5-Minute Glow Routine",
    p2:"Stars of the skincare world, serums get a lot of press. And for good reason! What are serums? Serums are high-powered, concentrated fluids that are a must-have step in your...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/09/Blog_The-Best-Aftershave-Skincare-Routine-image-550x550.jpg",
    p1 : "January 7th, 2021",
    h3:"Summer Lip Care Guide",
    p2:"Beauty enthusiasts know so much about skincare, and enjoy reading and learning even more about it. From ingredients to new products to hacks, tips and techniques, there’s so much content...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/05/BLOG_Damaged-Skin-Barrier_image-550x550.jpg",
    p1 : "November 10th, 2020",
    h3:"Benefits of Stacking Your Skincare Habits",
    p2:"Let’s be real with each other. At night, we’re tired. Sometimes, we’ve had a day.  ...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/04/BLOG_Prevent-and-Address-Dark-Spots_image-550x550.jpg",
    p1 : "October 30th, 2020",
    h3:"How To Stick to Your Skincare Routine On The Go",
    p2:"Viva Vitamin A. You’ve probably heard about Retinol, a form of Vitamin A that’s one of the buzziest ingredients in an anti-aging skincare routine. You may also know about the...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/06/Blog_Best-Eyebrow-Trends-image-550x550.jpg",
    p1 : "October 15th, 2020",
    h3:"How To Prevent Visible Dark Spots",
    p2:"Imagine a world where you don’t need to help your skin prevent wrinkles or acne. Wouldn't it be great if your skin took care of itself? Well, unfortunately, that's not...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/04/BLOG_Do-I-Have-Sensitive-Skin_image-550x550.jpg",
    p1 : "September 13th, 2020",
    h3:"How do I know if I have sensitive skin?",
    p2:"It’s, for lack of a better word, rude that many women endure simultaneous zits and wrinkles, isn’t it? The stunning statistic is that a smooth 40%of adults experience acne. And...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2021/03/BLOG_How-do-I-know-my-Skin-is-Sensitive_image-550x550.jpg",
    p1 : "September 9th, 2020",
    h3:"Multi-Med Therapy: Dermatology-Inspired Regimens That Deliver Transformative Results",
    p2:"When Stanford-trained dermatologists, Dr. Katie Rodan and Dr. Kathy Fields, launched Rodan + Fields in 2000, they had already achieved monumental success with this kind of comprehensive approach to acne...",
    a:"READ MORE"},

    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/09/1200x1500_REV_texture_1100x1100-550x550.jpg",
    p1 : "September 8th, 2020",
    h3:"Q&A: Find Your Ideal Anti-Aging Cream",
    p2:"When Stanford-trained dermatologists, Dr. Katie Rodan and Dr. Kathy Fields, launched Rodan + Fields in 2000, they had already achieved monumental success with this kind of comprehensive approach to acne...",
    a:"READ MORE"},
    {image :"https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/08/06_Rodan_Fields_3333_V7_1100x1100-300x300.jpg",
    p1 : "August 18th, 2020",
    h3:"Rodan + Fields Multi-Med Therapy Approach",
    p2:"When Stanford-trained dermatologists, Dr. Katie Rodan and Dr. Kathy Fields, launched Rodan + Fields in 2000, they had already achieved monumental success with this kind of comprehensive approach to acne...",
    a:"READ MORE"}
]

function leftAppend(){
    let leftside = document.querySelector(".leftside");
    leftBlog.forEach((el)=>{
        let content = document.createElement("div");
        content.setAttribute("class","content");

        let pic = document.createElement("div");
        pic.setAttribute("class","pic");

        let image = document.createElement("img");
        image.src = el.image;

        let about = document.createElement("div");
        about.setAttribute("class","about")

        let p1 = document.createElement("p");
        p1.innerText = el.p1;

        let h3 = document.createElement("h3");
        h3.innerText = el.p1;

        let p2 = document.createElement("p");
        p2.innerText = el.p2;

        let a = document.createElement("a");
        a.href = "#";
        a.innerText = el.a;

        about.append(p1,h3,p2,a)
        pic.append(image)
        content.append(pic,about)
        leftside.append(content)
    })
}
leftAppend()

//right side blogs--------------------->

let rightData = [
    {image : "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2018/04/MothersDay_Blog_2021-150x150.jpg",
    p1:"LIFESTYLE",
    p2:"April 25th, 2022",
    h3:"Mother’s Day Gifting Made Easy"},

    {image : "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/04/Blog_How-When-To-Switch-Regimens-image-150x150.jpg",
    p1:"SKINCARE GUIDES",
    p2:"May 3rd, 2022",
    h3:"How & When To Switch Your R+F Skincare Regimen"},

    {image : "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/04/Blog_Skin-Purging-vs.-Breakouts-image-150x150.jpg",
    p1:"SCIENCE OF SKINCARE",
    p2:"May 2nd, 2022",
    h3:"Skin Purging vs. Breakouts – What’s the Difference?"},

    {image : "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2022/04/Redefine-Multifunction-Eye-Cream-150x150.jpg",
    p1:"SKINCARE GUIDES",
    p2:"May 1st, 2022",
    h3:"What to Do About Thin Skin Under Eyes"}
]

function rightappend(){
    let rightside = document.querySelector(".rightside");
    rightData.forEach((el)=>{
        let r_content = document.createElement("div");
        r_content.setAttribute("class","r_content");

        let r_pic = document.createElement("div");
        r_pic.setAttribute("class","r_pic");

        let image = document.createElement("img");
        image.src = el.image;

        let r_about = document.createElement("div");
        r_about.setAttribute("class","r_about");

        let p1 = document.createElement("p");
        p1.innerText = el.p1;
        let p2 = document.createElement("p");
        p2.innerText = el.p2;
        let h3 = document.createElement("p");
        h3.innerText = el.h3;

        r_about.append(p1,p2,h3)
        r_pic.append(image)
        r_content.append(r_pic,r_about);
        rightside.append(r_content)
    })
    let img = document.createElement("img");
    img.src = "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/11/20_Redefine_blogAD_workingfile-1100x972.jpg";
    img.style.width="100%"
    img.style.height = "400px"
    img.style.marginTop = "80px"
    rightside.append(img)
}
rightappend()