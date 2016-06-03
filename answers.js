
function answer_1() {

  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";

}
function answer_2() {

  document.getElementById("q2-answer").innerHTML = "<ul> <li> 1.javascript can add or remove existing elements and attributes</li> <li>2.javascript can react to events happening in a page    </li> </ul>";

}
function answer_3() {
  
  var a = document.getElementsByClassName('q34-answer')
  a[0].innerHTML = "<ul><li>Parent node :A node directly above a node</li> <li>Child nodes : Nodes one level directly below</li><li>Sibling nodes :Nodes at the same level (same parent node)</li> <li> Descendant nodes :A set of nodes any number of levels below another node </li> <li>Ancestor nodes: A set of nodes above a node in a tree </li>    </ul>";

}
function answer_4() {

  var a = document.getElementsByClassName('q34-answer')
  a[1].innerHTML = "<ul><li>document.getElementById :Get a list of elements based on the ID - return one elemnet </li><li>document.getElementsByClassName :Get a list of elements based on the class name - return many elemnets</li><li>  document.getElementsByName :Get a list of elements based on the name : Name is generally used with input tag - return many elemnets</li><li> document.getElementsByTagName :Get a list of elements with the input tag name - return many elemnets</li></ul>";

}
 	
  $('body > ol > div > a').click(function(){

	$(this).text("Answer5");

	})


  $('.item').click(function(){

	$(this).attr('style','font-size:3em;');

	})


  $('body > ol > div > .item-group').nextAll('div').dblclick(function(){

	$(this).attr('style','color : blue ;');

	})

