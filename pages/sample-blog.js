
import ReactMarkdown from 'react-markdown'; 
/* This package takes Markdown and outputs it as JSX.*/

const DUMMYPOST ={
	title:'',
	content: `
# What is Markdown?
Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.

<https://www.markdownguide.org>

<fake@example.com>

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item
5. Fifth item


Unordered Lists
To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

- First item
- Second item
- Third item
- Fourth item
`
};

function SampleBlog() {
  return (
    <article className='blog-sa'>
      <ReactMarkdown>{DUMMYPOST.content}</ReactMarkdown>
    </article>
  );
}
export default SampleBlog;