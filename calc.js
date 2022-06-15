let contain=document.querySelector('.container');
let s='1234567890+-*/';
for(let i=0;i<s.length;i++)
{
    let a=document.getElementById(s[i]);
    a.addEventListener('click',()=>{

        console.log(5);
        if(i>=10 && contain.innerText[contain.innerText.length-1]<'0')
        {
            contain.innerText[contain.innerText.length-1]=s[i]; 
        }
        else if(i>=10 && contain.innerText.length==0)
        {
        }
        else
        contain.innerText=contain.innerText+a.innerText;
    });
}
let a=document.getElementById('clr');
a.addEventListener('click',()=>{
    contain.innerText='';
});
a=document.getElementById('=');
a.addEventListener('click',()=>{
let n=0;
let op='+';
let s="";
for(let i=0;i<contain.innerText.length;i++)
{
    console.log(contain.innerText.length[i]);
    if(contain.innerText[i]>='0' && i==contain.innerText.length-1)
    {
        s=s+contain.innerText[i];
    }
    if(contain.innerText[i]<'0' || i==contain.innerText.length-1)
    {
        // console.log("*");
        if(op=='+')
        {
            //console.log(s);
            if(s.length!=0)
            {
                n=n+parseInt(s);
            }   
            s="";
            op=contain.innerText[i];
        }
        if(op=='-')
        {
            if(s.length!=0)
            {
                n=n-parseInt(s);
            }   
            s="";
            op=contain.innerText[i];
        }
        if(op=='*')
        {
            if(s.length!=0)
            {
                n=n*parseInt(s);
            }   
            s="";
            op=contain.innerText[i];
        }
        if(op=='/')
        {
            if(s.length!=0)
            {
                n=n/parseInt(s);
            }   
            s="";
            op=contain.innerText[i];
        }
    }
    else
    {
        s=s+contain.innerText[i];
    }
    // console.log(typeof(n));
    // console.log(n);
}
    contain.innerText=n;
});
// console.log(a.id);
// console.log("**");  
a=document.getElementById('back');
a.addEventListener('click',()=>{
    str="";
    str=str+contain.innerText;
    str=str.slice(0,str.length-1);
    contain.innerText=str;
}); 