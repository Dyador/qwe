import h from './Following.module.css'
const Following = (props) =>{
    return(
        <div className={h.Following}>
           <div className={h.block_follow}><a className={h.follow} href="">{props.follow}</a>
             
           <div><a className={h.count} href="">{props.count}</a></div>
        </div>
        </div>
        
    );
}
export default Following;