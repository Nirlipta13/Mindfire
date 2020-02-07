using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VolumeMeasure
{
    class Volume
    {
        double length;
        double breadth;
        double height;

        public void setLength(double len)
        {
            length = len;
        }
        public void setBreadth(double bre)
        {
            breadth = bre;
        }
        public void setHeight(double hgt)
        {
            height = hgt;
        }

        public double calculateVolume()
        {
            return length * breadth * height;
        }
    }
}
