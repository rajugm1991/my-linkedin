import React from "react";
import HeaderNavList from "./HeaderNavList";
import SearchHeaderField from "./search/SearchHeaderField";
import SearchResults from "./search/SearchResults";


const Logo = () => {
  return (
    <div className="">
      <img
        alt="linkedin"
        className="h-14 "
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AZsgAWMQAY8cAWcTs8voAXcbz9/zh6vcAYcdBf9Cqwef7/f8AW8UAYsdumdgAVcRkk9Z1ndrG1u96oduQsOCuxei2yuozeM5PhtIUbMoncszD1O44e86Bpd3c5vXQ3fGJqt6dueMAUMJYi9SQ2xJeAAAEuElEQVR4nO2d63aiMBRGgYRoKlAoXsFLO9P3f8ZBnTpKQnTN4uQIfvuvUbobyI3knCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAoIjL2WJebNZVpqJeUDqsd5tivliWE265ICjnVZQqnWVCiLA/ml/LtFZpVO1LTr3pPk11n2IWVS3VfsrkFxe5JrX7QedFzCG48OR3dlx494tr5c3viKo9V2MpaR8/EyG9NjnL3LPfkXw5ckGfiiWPYKPo6UaNJZNgGEZ+mpvadyPzD1H7EFz47SZuUR76xZjrITyT09+nhb+RjA1dUAtOeauwqUTqYfietwqbStwTG3I2M2dSWsGSry+8GNJ2++w3aXObzkkNK77e/gdRUQpOIm6/kHjoVqbceiHxg7jkb0qbkduM0HDB39A0TQ3l2HR+37DfdVMb2QehYZG5L65TWb/VUpJWdUY5NN0460fkxeep2Od7TliRYkNouHP94bo6XApOa7pqFGtCQ9f0Xr/dFN3QKVJ2+Y7LGkMNusWOjNDQUS/RZ6vsgWwmqQgNuzv8zHz87zW8/01EaNg9LFVbozDZEI/HMDLf1iZUw3QeQ20pXY3KMLSUpmpNmZ5DS2kaP7bn0JyWkk2XmerQfPO1pZpM8hiKnVHYPUwfnGEo2x1iSbamw2QY6tseMaGbP3EZiupacUL4lpHLMBRqdSm4pdwqxWbYPIvr2fHNULxcky7+Mxo21SillpGiXYziNPQDDGEIQ34GZSj0373hUj3eg3IZytZ+dNn1yWXKIVS++1od4iRJ4sPqa50/OBnhGnnHQXJD/FNYHm4+CVZnESHr2e1QNv4VPuTIZGhMgS8TYNnaAXM2TGtzdS4IZuqBJchBGGZpx17RpLj/rA/BUO26j4qs7ioOwFC+uy4yvdeqPr/h7zsbt+5t0X16w+Xdd7hb94369IYPbBZ5d758fHrDB3AvtY7BMPhyVeIoDJ2VOArD4MMxthmH4cF1qT5UOvBn6NrnORjDyWpfbL7nS/tmSkdbMxDD6XeudCYyrfJvm6PjzdUwDH/l/5qSLF+ZBeLuaw3CcHH7SzbF7sHpEAyN832Wwz7DbmmMb2tzPuW4FJHdkZ4Ml+ZeoihpFxq04Zt5B6bGqs2QDRPLnj5z8/aQDT8tzaR5EmbIhrYzDWZTM2TDGQxPwJAGGF4DQxjCkAYYXgNDGMKQBhheA0MYjs7QOIIOQxpgeA0MYfjKhpSxsBwbXD0aUp7Hd20B8WdoO3PcF64NEt4MSQNgrp/C0Dyu2h+Og69GyIFLwAHZdre+mXn83RNpfBpHqAvx1ubnvyF2rQ9q2/er9tc7r0QaY2juaGpEm85PHvt+54VIg+6NP9aXrY3wDmm8tvHH3HNsxfKHJVBMj4w+9uUjQfeoIQ6z+wQPInWOBH5DypnFEfYwu+SxoMcfz3v8MdlfIK7++HMjvEB+C86hm6ccJcF27HlmXiBX0Avke2LJ2RXZIhQQMvq8a8H4c+cFL5D/MDjmsFSSPIdlypfD8kS5P+Uh1T3nIQ2FyLJTHtI5ax7SM5NzLtldHTZ/UT/JZEW13hQfi1nJdXcCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgP/kDjnplWREBPBIAAAAASUVORK5CYII="
      ></img>
    </div>
  );
};

const Header = () => {
  return (
    <header className=" bg-white border-t flex w-full justify-center p-1 shadow-md sticky top-0 ">
      <Logo />
      <SearchHeaderField />
      <HeaderNavList />
    </header>
  );
};

export default Header;
