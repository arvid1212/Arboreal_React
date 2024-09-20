import React from "react"
import Button from '@mui/material/Button';
import YoutubeEmbed from "@/components/YoutubeComponent/YoutubeEmbed";
import SecondaryNavbar from "@/components/navbar/SecondaryNavbar";

const Skogc=()=> {
  return (
    <>
    <main>
    <div className="Caliper" >

        <h2>Arboreal Forest - a real digital Caliper </h2>
        <p>
        A lot of people are talking about the digital revolution. Arboreal walks the walk and offer you a real digital experience of measurements.  

        For real – you should leave your manual tools at home. 

        For real – it is a digital solution, not some boring manual tool with a dull grey-black screen. 

        For real – a digital tool that could be downloaded to your phone. 

        For real – you should be able to measure everything digital, without the extra support of reference signs and sticks.  

        </p>
     
      </div>
        
      <div className="Benefits" >

        <h2> Benefits of using Arboreal Forest? </h2>

        <li className="BenefitsList">
        <ul>

        Your measuring tools are all always with you.
Good accuracy.
</ul>
<ul>
You get the result immediately.
59 % faster than manual tools.
No extra reference tools or sticks are needed.
</ul>
<ul>
You will recognize the method if you have been measuring a forest before.
</ul>
You have full control.
<ul>
Skip paper and pen and avoid extra work.
</ul>
<ul>
Works offline
</ul>

        </li>
   
<aside>
  <button type="button" className="AppBtn">
 <a href="https://apps.apple.com/us/app/arboreal-forest/id1462673493"><img src="" alt="" srcset="" /></a>
  </button>
</aside>
<aside className="PhonePhoto">
  <img src="" alt="iphone" srcset="" />
</aside>
      </div>

   <div className="HowWork">
   <h2>How does it work? </h2>
      <article>
        
        <p>
        You are measuring the trees in sample plots in the forest. First, you select the plot size and place the center on a good spot. After that, you walk around and measure the trees inside of the border. 

 

You will see the border when you get close, you will also see the center of the plot and the distance to the center. When you have measured all trees, you continue to measure the height of a representative tree for each tree species. 

 

The app will suggest the most representative tree in the plot, which you should mark. Walk away some distance and aim and mark the base and the top of the tree.

 

You get the result and will see the distribution of the diameters in a chart.

 

If you have an iPhone 12 Pro, 12 Pro Max, 13 Pro, 13 Pro Max, 14 Pro , 14 Pro Max, 15 Pro, 15 Pro Max the app will use the Lidar sensor when it measures the diameter of the tree.
        </p>
      </article>
      <aside>
      <YoutubeEmbed 
      
      className="ForestTutorialPlayer"
      position="fixed"
      />
      </aside>
   </div>
    <div className="Accurate" >
      <h2>How accurate is the result?</h2>
      <img className="AccurateImg" src="" alt="Accurate" srcset="" />
      <aside>
        <p>

        We have tested the application in different forests and we are comfortable with the result. The most diameters are within two centimeters. The bias is very low and that results in a good estimate of mean diameter, trees per ha, and basal area. 

The largest error source is where you place the sample plots. The plots should be placed on representative parts of the forest. If you are not an experienced forester, you should place a lot of sample plots.

 

The method has been evaluated in a Master thesis by Lisa Lindberg at the Swedish University of Agricultural Sciences. The result is similar and you could download the study here.

 

We have continued to develop the application since the external evaluation and now it even better.

 

Sveaskog evaluated the app in a report 2021: Arboreal Forest Evaluation Sveaskog Beltinventory

 

A scientific study compared three different mobile applications: Arboreal Forest, Katam and Trestima. Arboreal Forest was superior the other two apps because of the superior accuracy of diameter and trees / hectares. Link to paper.

        </p>
      </aside>




    </div>

    <div className="Start">
    <h2>   
          How do I start using it?
      </h2>
      <article>
      <p>
      The app is available on App Store.

You could test up five times for free. If you want to continue using the app you could subscribe per week or month.

You will always have access to your measurements even after you discontinue the subscription. 

Payments are done in the app.
      </p>
      </article>
      <article>
      <p>
      Arboreal Forest for companies.

We offer some extra features for companies that makes it easier to use the app for companies and organisation.

We offer a Rest-API that lets you download the data from the companies members.

Please contact us for more information.
      </p>

      </article>

    </div>

    <div className="Updates">
    <h2>Updates</h2>

    <article>
      <p>Advanced tutorial – Arboreal Forest

Johan Ekenstedt shows some more advanced features like:

– How to take multiple measurement off the same tree

– How to change tree species – Add a comment to a tree

– Mark a tree as damaged – Describe the settings that are available

– Rotate the local coordinate system

– Measure many heights of the same tree species

– Delete a measured tree</p>
      <YoutubeEmbed/>
    </article>
    <article>
      <p>The video shows how you could evaluate the app in an efficient way.

In the movie we refer to our own evaluation. Here is the file that you could download:

Link to the file</p>
      <YoutubeEmbed/>
    </article>
    <article>
      <p>We released a big update in May 2023. We replaced the whole measurement session in the app.

Now you could see a mini-map in the app that updates in real-time. 

You could measure without border, that is useful in plantations and fixed plots.

The app also speaks the species you have measured.</p>
      <YoutubeEmbed/>
    </article>
    <article>
      <p>In August we made it possible to measure smaller trees with the Lidar sensor in the phone.

You could either walk close and measure the diameter or mark the tree from distance if you only want to count the number of trees.

 </p>
      <YoutubeEmbed/>
    </article>
    <article>
      <p>In January 2022 it is possible to manage tree species in the app. 

It makes it faster to scroll and select the right species.</p>
      <img src="" alt="RightSpeciesImg" srcset="" />
    </article>
    <article>
      <p>In december 2021 we added the following features:

– Measure a tree from two different positions

– Enter the age and growth of each tree

– A Rest-API to retrieve measurements from the cloud </p>
      <YoutubeEmbed/>
    </article>
    <article>
      <p>In Autumn 2021 we released the following features:

– Mark damaged trees

– Measure the strip width

– Record the local coordinates and GPS-coordinates of each tree</p>
      <YoutubeEmbed/>
    </article>
    <article>
      <p>During the summer of 2021 we released a feature that estimates how much carbon that is stored in the forest and how much that it captures annually.</p>
      <YoutubeEmbed/>
    </article>
    <article>
      <p>In May 2021 we improved the algorithm to measure the diameter with Lidar.

We also evaluated the result.</p>
      <YoutubeEmbed/>
    </article>
    </div>
    </main>

    </>
  )
}

export default Skogc

