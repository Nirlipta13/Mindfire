using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VolumeMeasure
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Volume v1 = new Volume();
            v1.setLength(100);
            v1.setBreadth(200);
            v1.setHeight(100);

            double result = v1.calculateVolume();
            Console.WriteLine("The Volume of the box is: {0}", result);
        }
    }
}
