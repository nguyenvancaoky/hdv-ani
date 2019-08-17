function bp_thumbnail(image_url,post_title)
{
if (image_url.includes('steamuserimages')) {
  image_tag='<img src="'+image_url.replace('mw=640','mw=320')+'" alt="'+post_title.replace(/"/g,"")+'" title="'+post_title.replace(/"/g,"")+'"/>';
} else {
  image_tag='<video alt="'+post_title.replace(/"/g,"")+'" title="'+post_title.replace(/"/g,"")+'" autoplay="" loop="" muted="" playsinline=""><source src="'+image_url+'" type="video/mp4"></video>';
}
if(post_title!="") return image_tag; else return "";
}


function isLoadingVideo() {

}














<b:widget id='PopularPosts1' locked='false' title='Weekly Posts' type='PopularPosts'>
  <b:includable id='main' var='postl'>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<b:if cond='data:title'><h2><data:title/></h2></b:if>
<div class='widget-content popular-posts'>
<ul>
  <b:loop values='data:posts' var='post'>

  <li>
    <b:if cond='data:showThumbnails == &quot;false&quot;'>
      <b:if cond='data:showSnippets == &quot;false&quot;'>
        <!-- (1) No snippet/thumbnail -->
        <a expr:href='data:post.href' expr:title='data:post.title'><data:post.title/></a>
      <b:else/>
        <!-- (2) Show only snippets -->
        <div class='item-title'><a expr:href='data:post.href' expr:title='data:post.title'><data:post.title/></a></div>
        <div class='item-snippet'><data:post.snippet/></div>
      </b:if>
    <b:else/>
      <b:if cond='data:showSnippets == &quot;false&quot;'>
        <!-- (3) Show only thumbnails -->
        <div class='item-thumbnail-only'>
          <b:if cond='data:post.thumbnail'>
            <div class='item-thumbnail'>
              <a expr:href='data:post.href' expr:title='data:post.title' target='_blank'>
                <script type='text/javascript'>

                </script>
              </a>
            </div>
          </b:if>
          <div class='item-title'><a expr:href='data:post.href' expr:title='data:post.title'><data:post.title/></a></div>
        </div>
        <div style='clear: both;'/>
      <b:else/>
        <!-- (4) Show snippets and thumbnails -->
        <div class='item-content'>
          <b:if cond='data:post.thumbnail'>
            <div class='item-thumbnail'>
              <a expr:href='data:post.href' target='_blank'>
                <img expr:alt='data:post.title' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:title='data:post.title' expr:width='data:thumbnailSize'/>
              </a>
            </div>
          </b:if>
          <div class='item-title'><a expr:href='data:post.href' expr:title='data:post.title'><data:post.title/></a></div>
          <div class='item-snippet'><data:post.snippet/></div>
        </div>
        <div style='clear: both;'/>
      </b:if>
    </b:if>
  </li>
  </b:loop>
</ul>
</div>
</b:if>
</b:includable>
</b:widget>
