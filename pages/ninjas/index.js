import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps= async()=>{
    const resp= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await resp.json()
    return {
        props:{ninjas:data}
    }
}
const Ninjas = ({ninjas}) => {
    return (  
        <div>
            <h1>All ninjas</h1>
            {ninjas.map(ninja=>(
                <Link href={'/ninjas/' + ninja.id}key={ninja.id}>
                    <div className={styles.single}> 
                        <h3>{ninja.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Ninjas;