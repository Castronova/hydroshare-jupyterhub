
$(document).ready(function(){
    // put username in notebook header
    var header = $("#header-container")[0];
    var username = document.URL.split('/')[4];
    var div = document.createElement("div");
    div.style.color = "#0da3d4";
    div.innerHTML = "Welcome "+username;
    div .style.margin = "6px 4px 5px 2px";
    div.className = "pull-right"
    header.appendChild(div);

    if ($("#notebook_panel").length > 0) {
        // add page footer
        var foot = document.createElement('div');
        foot.id = 'footer';
        foot.style.height = '110px';
      
        var left = document.createElement('div');
        left.id = "footer-left";
        left.className = 'centering';
        
        var center = document.createElement('div');
        center.id = "footer-center";
        center.className = 'centering';
        
        var right = document.createElement('div');
        right.id = "footer-right";
        right.className = 'centering';
        
        var par = document.createElement("p");
        par.className = 'footerpar';
        par.innerHTML = 'HydroShare-JupyterHub Version 1.3';
        par.style.valign='middle';
        right.appendChild(par);
      
        var par = document.createElement("p");
        par.className = 'footerpar';
        par.innerHTML = 'Find us on <a href="https://github.com/hydroshare/hydroshare-jupyterhub" target="_blank">Github</a> ';
        right.appendChild(par);
        
        var par = document.createElement("p");
        par.className = "footerpar";
        par.innerHTML = 'Contact us at <a href="mailto:help@cuahsi.org?Subject=JupyterHub">help@cuahsi.org</a>';
        right.appendChild(par);
        
        var img = document.createElement('img');
        img.className = 'footerimg';
        img.src = '/user/_/custom/img/cuahsi-logo.jpg';
        img.style.width = "200px";
        left.appendChild(img);
      
        var nimg = document.createElement('img');
        img.className = 'footerimg';
        nimg.src = '/user/_/custom/img/renci-logo.png';
        nimg.style.width = "100px";
        nimg.style.padding = "0px 0px 20px 0px";
        center.appendChild(nimg);
        
        foot.appendChild(left);
        foot.appendChild(center);
        foot.appendChild(right);
        
        // insert the footer at the bottom of the page
        document.getElementById('notebook_panel').appendChild(foot);
    }

});
