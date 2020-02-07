using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapeInheritance
{
    class Shape
    {
        public double width;
        public double height;
        public void setWidth(double w)
        {
            width = w;
        }
        public void setHeight(double h)
        {
            height = h;
        }
    }
    class Rectangle : Shape
    {
        public double getArea()
        {
            return width * height;
        }
    }
}
