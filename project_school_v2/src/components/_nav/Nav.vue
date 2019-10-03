<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/professores">Professores</router-link>
        </li>
        <li>
          <router-link to="/alunos">Alunos</router-link>
        </li>
        <li style="float:right">
          <router-link to="/sobre">Sobre</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
       
       <script>
export default {};
</script>
       
       <style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* li a {
  display: block;
  width: 60px;
} */

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 60px;
}

li a {
  display: block;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: #4caf50;
  color: white;
}

.active {
  background-color: #4caf50;
  color: white;
}

li {
  text-align: center;
  /* border-bottom: 1px solid #555; */
}

/* li:last-child {
  border-bottom: none;
} */

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  height: 100%; /* Full height */
  position: fixed; /* Make it stick, even on scroll */
  overflow: auto; /* Enable scrolling if the sidenav has too much content */
}

li {
  display: inline;
}
li {
  float: left;
}

a {
  display: block;
  padding: 8px;
  background-color: #dddddd;
}

ul {
  background-color: #dddddd;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #4caf50;
}
.active {
  background-color: #4caf50;
}

/* Add a gray right border to all list items, except the last item (last-child) */
li {
  border-right: 1px solid #bbb;
}

li:last-child {
  border-right: none;
}

ul {
  position: fixed;
  top: 0;
  width: 100%;
}

ul {
  /* border: 1px solid #e7e7e7; */
  background-color: #f3f3f3;
}

li a {
  color: #666;
}

ul {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

nav .router-link-active {
  background-color: #4caf50;
  color: #fff;
}
</style>