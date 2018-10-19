using Microsoft.EntityFrameworkCore;

namespace server
{
  public class TrackerContext : DbContext
  {
    public TrackerContext(DbContextOptions<TrackerContext> options) : base(options)
    {

    }
    
    public DbSet<User> users  {get;set;}    
    public DbSet<Job>  jobs   {get;set;}    
    public DbSet<StatusType>  statusTypes {get;set;}    
 
  }
}