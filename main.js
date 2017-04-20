var blog = [{title: "NSS Week One", copy: "We have completed the first week of classes. Woah. I am a combination of overwhelmed and excited.  For this blog, I want to recap important things I learn each week. The first lesson learned… using the terminal is not scart.  I can now make folders and files quickly and open them in Atom.  I am still working on short cuts and such, but I no longer feel scared to use the terminal.  The second lesson learned… Git.  I did not fully understand the difference between Github and the relationship between Git and Github until today.  I can make repositories, add READMEs, add files, commit files, and finally push files to Github.  I know how to make a new branch and I am practicing using branches.  I can see that it will take practice to memorize all the commands. Sticky notes are going to be my best friends.", date: "April 7th, 2017"},
{title: "NSS Week Two", copy: "Second week almost finished! Yesterday, we started our first group project. So many awesome lessons learned through that process… turns out that branches are super important.  Our group had a pretty good flow with GitHub towards the end of the project.  At first, approving every single pull request was tedious, but I get the reason why it is important to do so.  Our finished project turned out well, I think we were all very proud of it.  I got some good practice styling with CSS and designing, however I wish I could have had some more practice with the javascript portion of the project.  We are repeating the same project tomorrow, but with new groups.  I will focus more on the javascript this time and less on CSS things.", date: "April 13th, 2017"}]


var readBlog = document.getElementById("read-blog");
var blogArticle = document.getElementById("blog-article");
var blogBlock = "";
blog.forEach(function(x, index) {
      var blogBlock = `<article id="blog-${index}">
      <header class="blog-heading">
      <h2>${x.title}</h2>
      </header>
      <section>
      <p>${x.copy} </p>
      </section>
      <section>
      <h3>Date</h3>
      <p>${x.date}</p>
      </section>
      </article>`;

      readBlog.addEventListener("click", function(event) {
      blogArticle.innerHTML += blogBlock;

      readBlog.addEventListener("click", function(event) {
        blogArticle.innerHTML = "";
      });
    });
  });

// ????? NEXT STEP - make blog reappear when the button is push again ??????????
