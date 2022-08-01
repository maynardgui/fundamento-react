import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './avatar'
import styles from './Comment.module.css'

export function Comment ({ content, onDeleteComment }) {
    function handleDeleteComment() {
      onDeleteComment(content);
    }
     return(
       <div className={styles.comment}>
          <Avatar hasBorder={false} src='https://github.com/maynardgui.png'/>
           
          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                  <div className={styles.authorAndTime}>
                  <strong>Guillermo Lema</strong>
                  <time title='11 de Maio ás 08:15' dataTime='2022-05-11 08:13:38'>Cerca de 1h atrás</time>
                  </div>  

                  <button onClick={handleDeleteComment} title='Deletar comentário'>    
                  <Trash size={24} />
                  </button>  
                </header>

            <p>{ content }</p>
            </div>

            <footer>
                <button>
                   <ThumbsUp />
                    Aplaudir <span>{20}</span>
                </button>
            </footer>
          </div>  
        </div> 
    )
}