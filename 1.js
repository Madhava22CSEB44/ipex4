const array=[1,2,3,4,5,6];
        var sum=0;var product=1;
        for(i=0;i<array.length;i++)
        {
            sum=array[i]+sum;
            product=array[i]*product;

        }
        document.write(sum);
        document.write(product);

    
