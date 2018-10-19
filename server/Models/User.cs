using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace server
{
  public class User
  {
    [Key]
    public int user_id {  get; set; }

    public string name {get; set;}

    public string email {get; set;}

    public string password {get; set;}

    [ForeignKey("job_id")]

    public int job_id {get;set;}

    public Job job {get;set;}


    public User()
    {

    }



    public User(string n, string e, string pw)
    {
      this.name = n;
      this.email = e;
      this.password = pw;
    }
  }
}