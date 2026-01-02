# 📘 HTML (HyperText Markup Language)

HTML is the standard markup language used to create the **structure of web pages**.  
It defines elements such as headings, paragraphs, links, images, forms, and more.

---

## 🚀 What is HTML?

HTML stands for **HyperText Markup Language**.  
It is **not a programming language**, but a **markup language** used to describe the structure of a webpage.

- HTML tells the browser **what to display**
- CSS tells the browser **how it looks**
- JavaScript tells the browser **how it behaves**

---

## 🧱 Basic HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>

  <h1>Hello World</h1>
  <p>This is my first HTML page</p>

</body>
</html>


🏷️ HTML Tags

HTML uses tags to define elements.

Types of Tags:

Paired tags → <p></p>, <h1></h1>

Self-closing tags → <br>, <img>, <input>

🔑 HTML Attributes

Attributes provide extra information about elements.

<a href="about.html">About</a>
<img src="photo.jpg" alt="Profile Photo">


Common attributes:

id

class

href

src

alt

style

🧩 Block vs Inline Elements
Block Elements:

Start on a new line

Take full width
Examples: <div>, <p>, <h1>

Inline Elements:

Stay on the same line

Take only required width
Examples: <span>, <a>, <b>

🔗 Anchor Tag (Links)

Used to create navigation between pages or sections.

<a href="contact.html">Contact</a>
<a href="#section1">Go to Section</a>
<a href="blog.html#html">HTML Section</a>

🖼️ Images
<img src="image.jpg" alt="Sample Image" width="200">


alt attribute is important for SEO & accessibility

📋 Lists
Ordered List
<ol>
  <li>HTML</li>
  <li>CSS</li>
</ol>

Unordered List
<ul>
  <li>Apple</li>
  <li>Mango</li>
</ul>

📊 Tables
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Karan</td>
    <td>21</td>
  </tr>
</table>

📝 Forms

Forms are used to collect user input.

<form>
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <input type="submit">
</form>


Common input types:

text

email

password

radio

checkbox

submit

🧱 div & span

<div> → block-level container (layout)

<span> → inline container (text styling)

<div>
  <p>This is <span>important</span> text</p>
</div>

🧠 Semantic HTML (HTML5)

Semantic tags describe the meaning of content.

Common semantic tags:

<header>

<nav>

<section>

<article>

<footer>

<main>

Benefits:

Better SEO

Better accessibility

Clean code

🎵 Media Tags
Audio
<audio controls>
  <source src="music.mp3">
</audio>

Video
<video controls width="400">
  <source src="video.mp4">
</video>

🧩 iframe

Used to embed another webpage.

<iframe src="about.html" width="400" height="300"></iframe>

🧠 Meta Tags

Meta tags provide information about the page.

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="HTML Tutorial">

💬 HTML Comments
<!-- This is a comment -->


Comments are not visible in the browser.

✅ Best Practices

Use semantic tags

One <h1> per page

Always use alt in images

Proper indentation

Avoid inline styles

Use meaningful file names

📁 Recommended File Structure
project/
├── index.html
├── about.html
├── contact.html
├── images/
├── css/
└── media/

🎯 Conclusion

HTML is the foundation of web development.
Once HTML is mastered, the next step is CSS for styling and JavaScript for interactivity.

👨‍💻 Author

Karan

Happy Coding 🚀


---

### ✅ Next step?
If you want, I can:
- 📄 Convert this README into a **PDF**
- 🎯 Create a **CSS README**
- 💼 Make a **GitHub-ready project repo**
- 🧠 Add **HTML interview Q&A section**

Just tell me 👍
