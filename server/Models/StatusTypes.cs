using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace server
{
  public class StatusType
  {
    [Key] public int statustype_id {get;set;}

    public string type {get;set;}

    public StatusType()
    {

    }




  }
  
}