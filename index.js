
let range=document.getElementById('range');
let rangeValue=document.getElementById('rangevalue')
let password1=document.getElementById("password1")
let password2=document.getElementById("password2")

range.addEventListener('input',function()
{
    rangeValue.textContent=range.value;
})

function generate()
{
    password1.textContent=" ";
    password2.textContent=" ";
    const lowercase='abcdefghijklmnopqrstuvwxyz';
    const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number='1234567890';
    const symbols='!@#$%^&*-_=+[{]}\\|;:\'",<.>/?'
    
    const all=lowercase+uppercase+number+symbols;
    const length=parseInt(range.value);
    let array=[all];
    
    for(let i=0;i<length;i++)
    {
        const randomindex=Math.floor(Math.random()*all.length);
        password1.textContent+=all[randomindex];
    }

    for(let j=0;j<length;j++)
    {
        const random=Math.floor(Math.random()*all.length)
        password2.textContent+=all[random];
    }
    
    
}

function copy1() {
    let copyText = document.getElementById("password1").textContent;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function copy2() {
    let copyText = document.getElementById("password2").textContent;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}






