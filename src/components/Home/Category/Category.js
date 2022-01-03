import React from 'react'
import { Avatar, Button, Divider, Paper, Typography } from '@material-ui/core'

import userImg from '../../../images/avatar.png'
import useStyles from './styles'

const categoryList1 = ['Trung Nghia', 'Bạn bè', 'Nhóm', 'MarketPlace', 'Watch' ]
const categoryListImg1 = ['', 'https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png', 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png','https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png','https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png']
const categoryList2 = ['Group 1', 'Group 2', 'Group 3','Group 4','Group 5']
const categoryListImg2 = ['https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png', 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/cp0/c23.0.64.64a/p64x64/118908142_2891183677776352_7934273788911243285_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=AuFz4wH9zNwAX-T8UeP&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-d9OIgzBowFuXY27dSxWcNPUoUImflzNt-t5_Gh__6Yw&oe=61F19A38','https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/cp0/c52.0.64.64a/p64x64/245927932_2955947984643781_6155526192439446117_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=wH2yHmQkmkkAX9Hd--i&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9f5hIL54SlVm-jBrXFibwDtlhV3k8RFEpQK5jlrwLArA&oe=61D2D370','https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/cp0/c28.0.64.64a/p64x64/70327757_2252747671489245_3189032832395640832_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=bFjjpCUTFVoAX-It7Js&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_GntBYMr7LB5Ojnp2lssYG75NQcjNVy7NB2VheTenu6A&oe=61F37D24','https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/cp0/c40.0.64.64a/p64x64/270035029_2117450341743706_3882746621166997322_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=cv0Y_S_5G-oAX_jj8jw&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_Wl00hRsTQkjHv9iZ6ItCnmvTf-k0TEXKyjAQT05RYIw&oe=61D14EA3']


function Category() {
    const classes = useStyles()

    return (
        <>
        <Paper color="primary" alignItems="stretch" className={classes.category} elevation={12}>
            {
                categoryList1.map((cate1,index) => (
                    <Button className={classes.categoryButton} variant="contained" size="small" fullWidth key={index}>
                        <Avatar alt="Nghia" src={(categoryListImg1[index] !== '' ? categoryListImg1[index] : userImg)} className={classes.categoryImg} />
                        <Typography variant="p" style={{fontWeight: 'bold'}}>
                            {cate1}
                        </Typography>
                    </Button>
                ))
            }
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant='h6' align='center' color='secondary' className={classes.categoryHeading}>Lối tắt</Typography>
            {
                categoryList2.map((cate2,index) => (
                    <Button className={classes.categoryButton} variant="contained" size="small" fullWidth key={index}>
                        <Avatar alt="Nghia" src={categoryListImg2[index]} className={classes.categoryImg} />
                        <Typography variant="p" style={{fontWeight: 'bold'}}>
                            {cate2}
                        </Typography>
                    </Button>
                ))
            }
        </Paper>
        <Paper color="primary" alignItems="stretch" className={classes.category2}>
            <ul style={{ margin: '10px 0'}}>
                <li className={classes.categoryRule}>Quyền riêng tư</li>
                <li className={classes.categoryRule}>Điều khoản</li>
                <li className={classes.categoryRule}>Quảng cáo</li>
                <li className={classes.categoryRule}>Lựa chọn quảng cáo</li>
                <li className={classes.categoryRule}>Cookie</li>
            </ul>
        </Paper>
        </>
    )
}

export default Category
