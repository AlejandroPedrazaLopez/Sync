import React from 'react';
import { Link } from 'react-router-dom';

function Image(props) {
    let style = {width: 'auto', height: 'auto'};

    if (props['margin-top']) style.marginTop = props['margin-top'];
    if (props['margin-bottom']) style.marginBottom = props['margin-bottom'];
    if (props['margin-right']) style.marginRight = props['margin-right'];
    if (props['margin-left']) style.marginLeft = props['margin-left'];

    if (props.valueWidth) {
        if (props.valueWidth.indexOf('flexGrow') != -1) {
            const info = props.valueWidth.split('=');
            style[info[0]] = info[1];
        } else if (props.valueWidth.indexOf('100%') != -1) {
            let margin = '';
            const otherMargin = style.marginRight? ' + ':'';
            if (style.marginRight) margin += style.marginRight + otherMargin;
            if (style.marginLeft) margin += style.marginLeft;
            style.maxWidth = margin == '' ? '100%':'calc(100% - ('+margin+'))';
        } else {
            style.maxWidth = props.valueWidth;
        }
    } else {
        style.maxWidth = '28vw';
    }

    if (props.valueHeight) {
        if (props.valueHeight.indexOf('flexGrow') != -1) {
            const info = props.valueHeight.split('=');
            style[info[0]] = info[1];
        } else if (props.valueHeight.indexOf('100%') != -1) {
            let margin = '';
            const otherMargin = style.marginRight? ' + ':'';
            if (style.marginTop) margin += style.marginTop + otherMargin;
            if (style.marginBottom) margin += style.marginBottom;
            style.maxHeight = margin == '' ? '100%':'calc(100% - ('+margin+'))';
        }  else {
            style.maxHeight = props.valueHeight;
        }
    } else {
        style.maxHeight = '11vw';
    }
    const image = props.image ? props.image : props.src;

    if (props.destination) {
        return (
            <Link to={props.destination} style={{ textDecoration: 'none' }}>
                <img id={props.id} className={props.style} alt={props.name} src={image} style={style} />
            </Link>
        );
    } else {
        return (
            <img id={props.id} className={props.style} alt={props.name} src={image} style={style} />
        );
    }
}

export default Image;
                