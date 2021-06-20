// import blog1 from '../img/blogs/blog1.svg';
// import blog2 from '../img/blogs/blog2.svg';
// import blog3 from '../img/blogs/blog3.svg';
// import blog4 from '../img/blogs/blog4.svg';
// import blog5 from '../img/blogs/blog5.svg';
import blog_img from '../ressources/images/Group1.svg';

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const blogs = [
    {
        id: 1,
        image: blog_img,
        title: ({titlea, title}) => ({
            title: i18n.t("Cat1.Text1"),
        }),
        link: "Test",
        date : '21',
        month: 'Mar',
        year: '2020'
    },
    {
        id: 2,
        image: blog_img,
        title: i18n.t("Cat1.Text1"),
        link: 'https://www.facebook.com/',
        date : '09',
        month: 'Dec',
        year: '2019'
    },
    {
        id: 3,
        image: blog_img,
        title: 'UI/UX Design Starter with Figma',
        link: 'https://www.facebook.com/',
        date : '15',
        month: 'Jun',
        year: '2018'
    },
    {
        id: 4,
        image: blog_img,
        title: 'UI/UX Design Starter with Figma',
        link: 'https://www.facebook.com/',
        date : '04',
        month: 'Aug',
        year: '2020'
    },
    {
        id: 5,
        image: blog_img,
        title: 'UI/UX Design Starter with Figma',
        link: 'https://www.facebook.com/',
        date : '09',
        month: 'Sep',
        year: '2019'
    },
    {
        id: 6,
        image: blog_img,
        title: 'UI/UX Design Starter with Figma',
        link: 'https://www.facebook.com/',
        date : '09',
        month: 'Sep',
        year: '2019'
    },
    {
        id: 7,
        image: blog_img,
        title: 'Test Blogs data1',
        link: 'https://www.facebook.com/',
        date : '09',
        month: 'Sep',
        year: '2019'
    },
    {
        id: 8,
        image: blog_img,
        title: 'Test Blogs data2',
        link: 'https://www.facebook.com/',
        date : '09',
        month: 'Sep',
        year: '2019'
    },
    {
        id: 9,
        image: blog_img,
        title: 'UI/UX Design Starter with Figma',
        link: 'https://www.facebook.com/',
        date : '09',
        month: 'Sep',
        year: '2019'
    },
    {
        id: 10,
        image: blog_img,
        title: 'Test Blogs data1',
        link: 'https://www.facebook.com/',
        date : '09',
        month: 'Sep',
        year: '2019'
    },
    {
        id: 11,
        image: blog_img,
        title: 'Test Blogs data2',
        link: 'https://www.facebook.com/',
        date : '09',
        month: 'Sep',
        year: '2019'
    }
];

export default blogs;