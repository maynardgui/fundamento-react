import { Post } from './components/Post'
import { Header } from './components/Header';

import styles from "./App.module.css";

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id:1, 
    author: {
    avatarUrl: 'https://github.com/maynardgui.png',
    name: 'Guillermo Lema',
    role: 'Developer Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera !!', },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu Portfólio. É um projeto em projeto em React', },
      { type: 'link', content: 'www.maynardsystem.com.br' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id:2, 
    author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Brito',
    role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera !!', },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu Portfólio. É um projeto em projeto em React', },
      { type: 'link', content: 'www.maynardsystem.com.br' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return ( 
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
               />
            )
          })}
        </main>
      </div>
    </div>
  )
}
