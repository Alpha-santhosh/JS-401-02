function change() {
    var boxs = document.getElementsByClassName
    ("box")
    var b = [...boxs]
    b.map((box,idx,b)=>{
        if(idx+1 == 1)
        {
            // console.log(idx+1);
            b[idx].classList.add("blue")
        }else if(idx+1 == 17)
        {
            // console.log(idx+1)
            b[idx].classList.add("palevioletred")
        }else if(idx+1 == 9)
        {
            // console.log(idx+1)
            b[idx].classList.add("green")
        }else if((idx+1)%2 == 0)
        {
            // console.log(idx+1)
            b[idx].classList.add("lime")
        }
    })
}