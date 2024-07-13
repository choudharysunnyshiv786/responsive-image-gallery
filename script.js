let currentImgSource="image1.jpg";
//sets str[index]=chr
function setCharAt(str,index,chr) {
    return str.substring(0,index) + chr + str.substring(index+1);
}
function assignImage(imgSource){
    const imgElement=document.getElementById("myImage");
    if(imgSource=='-'){
        //converts image2.jpg to image1.jpg
        if(String.fromCharCode(currentImgSource.charCodeAt(5))!='1'){
            currentImgSource=setCharAt(currentImgSource,5,String.fromCharCode(currentImgSource.charCodeAt(5)-1));
        }
        else{
            return;
        }
        imgSource=currentImgSource;
    }
    else if(imgSource=='+'){
        //converts image1.jpg to image2.jpg
        if(String.fromCharCode(currentImgSource.charCodeAt(5))!='9'){
            currentImgSource=setCharAt(currentImgSource,5,String.fromCharCode(currentImgSource.charCodeAt(5)+1));
        }
        else{
            return;
        }
        imgSource=currentImgSource;
    }
    imgElement.src=imgSource;
    //if we click on thumbnail, then we have to reset the currentImgSource
    currentImgSource=imgSource;
}
