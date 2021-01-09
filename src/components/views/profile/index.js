import Layout from "@layout/base"
import AsideTweets from "@layout/aside-tweets";
import AsideNavigation from "@shared/aside-navigation"

import ProfileInformation from "@shared/profile-information"

import styles from "./styles.module.scss"

const routes = [
    {title:"Tweets",              pathname:"/[profile]"},
    {title:"Tweets y respuestas", pathname:"/[profile]/replies"},
    {title:"Fotos y videos",      pathname:"/[profile]/media"},
    {title:"Me gusta",            pathname:"/[profile]/likes"}
]

export default function ProfileView() {
    return (
        <Layout>

            <ProfileInformation />
            
            <div className={styles.margin}>
                <AsideTweets 
                    aside={() => <AsideNavigation routes={routes} />} 
                    tweets={() => 

                    <>
                        <section>Hola</section>
                        <section>Hola</section>
                        <section>Hola</section>
                        <section>Hola</section>
                    </>
                
                } />
            </div>

        </Layout>
    )
}