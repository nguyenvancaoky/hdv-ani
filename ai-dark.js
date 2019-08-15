function bp_thumbnail(image_url,post_title)
{
if (image_url.includes('steamuserimages')) {
  image_tag='<img src="'+image_url.replace('mw=640','mw=320')+'" alt="'+post_title.replace(/"/g,"")+'" title="'+post_title.replace(/"/g,"")+'"/>';
} else {
  image_tag='<video alt="'+post_title.replace(/"/g,"")+'" title="'+post_title.replace(/"/g,"")+'" autoplay="" loop="" muted="" playsinline=""><source src="'+image_url+'" type="video/mp4"></video>';
}
if(post_title!="") return image_tag; else return "";
}
