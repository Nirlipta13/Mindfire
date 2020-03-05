using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ApplicationStudent.Startup))]
namespace ApplicationStudent
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
