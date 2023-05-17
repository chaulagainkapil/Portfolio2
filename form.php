<?php
$con=mysqli_connect("localhost","root","","portfolio");

if($con){
    echo "connection success";
}
else{
    die("connection failed".mysqli_connect_error($con));
}

if(isset($_POST['kapil'])){
    $name=$_POST['fName'];
    $lastname=$_POST['lName'];
    $pEmail=$_POST['sEmail'];
    $pNumber=$_POST['sNumber'];
    $pMessage=$_POST['sMessage'];

}

    // using sql to create a data entry query
    $sql = "INSERT INTO contact_form (Fname, Lname, Email, pNmber, pMessage) VALUES ('$name', '$lastname', '$pEmail', '$pNumber', '$pMessage')";

    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
       header("location:index.html");
    }

  
    // close connection
    mysqli_close($con);
?>