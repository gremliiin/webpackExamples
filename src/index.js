import * as $ from 'jquery';
import Post from '@models/Post';
import csv from '@/assets/data';
import xml from '@/assets/data';
import json from '@/assets/json';
import '@/styles/styles.css';
import WebpackLogo from '@/assets/webpack-logo';

const post = new Post("Webpack post title", WebpackLogo);

$('pre').addClass('code').html(post.toString());

console.log(post.toString());

console.log('JSON', json);

console.log('XML', xml);

console.log('CSV', csv);