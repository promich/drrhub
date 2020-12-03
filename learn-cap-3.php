<?php include ("hub-head.php"); ?>


    <section class="bg-white d-flex flex-column justify-content-center ">
      <div class="container py-0 position-relative">
	    <div class="row mb-4">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-primary-alt">
                <li class="breadcrumb-item">
                  <a href="/">DRR Media Hub</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="learn.php">Learning Centre</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">CAP</li>
              </ol>
            </nav>
          </div>
		</div>  
        <div class="row">
          <div class="col-xl-9 col-lg-9 col-md-8">
            <h1 class="display-4">Common Alerting Protocol</h1>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-4 mt-auto">
                <div class="d-flex justify-content-end">
                <div class="d-flex align-items-center">
                  <span class="text-small mr-1">Share this course:</span>
                  <div class="d-flex mx-2">
                    <a href="#" data-social="twitter" class="btn btn-round btn-primary mx-1">
                      <img class="icon icon-sm" src="assets/img/icons/social/twitter.svg" alt="twitter social icon" data-inject-svg />
                    </a>
                    <a href="#" data-social="linkedin" class="btn btn-round btn-primary mx-1">
                      <img class="icon icon-sm" src="assets/img/icons/social/linkedin.svg" alt="linkedin social icon" data-inject-svg />
                    </a>
                    <a href="#" data-social="facebook" class="btn btn-round btn-primary mx-1">
                      <img class="icon icon-sm" src="assets/img/icons/social/facebook.svg" alt="facebook social icon" data-inject-svg />
                    </a>
                  </div>
                </div>
                </div>
          </div>



        </div>

      </div>

    </section>




<section class="bg-primary-alt">
      <div class="container">
        <div class="row justify-content-between">

        <div class="col-lg-8 col-xl-7  order-lg-1 order-md-2">

            <div class="rounded o-hidden">
              <div class="plyr" data-plyr-provider="vimeo" data-plyr-embed-id="480773763"></div>
            </div>
	         <h3 class="mt-4">Format and content of a CAP message</h3>
              <p class="lead"> 
Let's look at the actual format and content of a CAP message.
</p>





<ul class="nav mt-4" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="further-tab" data-toggle="tab" href="#further" role="tab" aria-controls="further" aria-selected="true">Further reading</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="transcript-tab" data-toggle="tab" href="#transcript" role="tab" aria-controls="transcript" aria-selected="false">Transcript</a>
  </li>
</ul>
<div class="tab-content mt-4" id="myTabContent">
  <div class="tab-pane fade show active" id="further" role="tabpanel" aria-labelledby="further-tab">
	  <div>
<a href="https://drive.google.com/file/d/1J2_sC_k0RHLmy6lZ_IgdyClSK9dmZkc4/view" target="_blank" class="hover-arrow">Introduction to the CAP Standard - video</a>
	  </div>
	  <div class="mb-1">
<a href="https://drive.google.com/file/d/1bIuRc5PqBmZreK15b3hOA2dR_r44QSpU/view" target="_blank">French</a>
	</div>
	  <div>
<a href="https://alertingauthority.wmo.int" target="_blank" class="hover-arrow">International Register of Alerting Authorities</a>
	  </div>
	  <div>
<a href="https://preparecenter.org/resource/cap-implementations-status-report/" target="_blank" class="hover-arrow">CAP Implementations by Country</a>
	  </div>
	  <div>
<a href="https://alert-hub.org" target="_blank" class="hover-arrow">CAP Alert Hub</a>
	  </div>
	  <div>
<a href="https://cap.alert-hub.org" target="_blank" class="hover-arrow">CAP Editor freeware</a>
	  </div>
	  <div>
<a href="https://preparecenter.org/resource/cap-common-alerting-protocol/" target="_blank" class="hover-arrow">Other CAP references</a>
	  </div>
  </div>
  <div class="tab-pane fade" id="transcript" role="tabpanel" aria-labelledby="transcript-tab">
	  
	  <p>
Now let's look at the actual format and content of a CAP Message.
	  </p><p>
Here is an example CAP alert message as a CAP news feed subscriber might view it.
	  </p><p>
And, here is that same CAP alert in its raw format, known as XML.
	  </p><p>
Now let's look at the elements of this CAP message.
	  </p><p>
This particular CAP message has the senderName: “National Weather Service, Sacramento, California”.
	  </p><p>
Here the headline is: “Severe Thunderstorm Warning”.
	  </p><p>
In the description we see that the storm is likely to have “hail...intense rain and strong damaging winds”.
	  </p><p>
And, the instruction says: "take cover in a substantial shelter until the storm passes".
	  </p><p>
Notice the alerting area. For human readers, the area is described in text.
	  </p><p>
And, for processing by automated tools, the area is delineated by a polygon with latitude/longitude vertices.
	  </p><p>
This is a critically important feature of CAP messages.
	  </p><p>
CAP Messages contain some text values for human readers, such as  "area description", "headline", and "instruction".
	  </p><p>
But, CAP messages also contain coded values that are so crucial for automated filtering, routing, and translation to human languages.
	  </p><p>
Let's look at some of these “coded values” in CAP.
	  </p><p>
For Event Category, the sender can indicate: Geophysical, Meteorological, Safety, Security, Rescue, Fire, Health, Environmental, Transport, Infrastructure, and Other.
	  </p><p>
The relative priority of this message, from a receiver attention perspective, is characterized by three CAP elements: 
	  </p>
<ol>	  
<li>	  
  Urgency:  Timeframe for responsive action 
</li><li>
  Severity:  Level of threat to life or property 
</li><li>
  Certainty:  Probability of occurrence
</li>
</ol>
<p>
There is a common practice for high priority alerts (sometimes called "Red Alerts"). 
	  </p><p>
That's when urgency, severity, and certainty are all set at the top two levels. 
	  </p><p>
That means:   
	  </p>
<ul>
	<li>
   people must act within one hour,
	</li>
	<li>
   the situation is life-threatening, and
	</li>
	<li>
   the certainty is above 50%.
	</li>
</ul>
<p>
Before we leave this section, we should reflect briefly on the matter of Security, Reliability, and Authenticity.
	  </p><p>
All alerting systems can be targeted by attempts to disrupt service or to falsify information. This applies to traditional alerting methods as well as the most modern methods that rely heavily on digital networks.
	  </p><p>
Mindful of this fact of life, every alerting authority should have policy, procedures, and technology in place to assure  the appropriate reliability and security of its systems that support public and private alerting.
	  </p><p>
When leveraging digital alerts such as CAP, here are three safe practices:
	  </p>
<ul>
	<li>
look for HTTPS encryption,
	</li>
	<li>
verify the alert if it is digitally signed,
	</li>
	<li>
cross-check alerts from multiple sources if possible.		  
	</li>
</ul>
		  

  </div>
  
  
  
</div>




        </div>
          
        <div class="col-lg-4 col-xl-4  order-lg-2 order-md-1">
	        <div class="card sticky-top ">
              <div class="card-body bg-white d-flex flex-column ">
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-small d-flex">
                    <div class="mr-2">
                      <a href="#">Video Course</a>
                    </div>
                  </div>
                </div>
                  <h4 class="mb-1">Common Alerting Protocol</h4>
                

            <div class="row no-gutters mt-4 mb-2 d-none d-md-flex">
              <div class="col-xl-8 col-lg-7 col-md-6">
                <span class="text-small text-muted">Course outline</span>
              </div>
            </div>
            
            
            <div class="list-group list-group-flush">
              <a href="learn-cap.php" class="list-group-item list-group-item-action row no-gutters py-3">
                <div class="col px-2">
                  <h5 class="h6 mb-0">1. Introduction</h5>
                </div>
              </a>
              <a href="learn-cap-2.php" class="list-group-item list-group-item-action row no-gutters py-3">
                <div class="col px-2">
                  <h5 class="h6 mb-0">2. The key facts</h5>
                </div>
              </a>
              <a href="learn-cap-3.php" class="list-group-item list-group-item-action active row no-gutters py-3">
                <div class="col px-2">
                  <h5 class="h6 mb-0">3. Format and content of a CAP message</h5>
                </div>
              </a>
              <a href="learn-cap-4.php" class="list-group-item list-group-item-action row no-gutters py-3">
                <div class="col px-2">
                  <h5 class="h6 mb-0">4. How CAP is different</h5>
                </div>
              </a>
              <a href="learn-cap-5.php" class="list-group-item list-group-item-action row no-gutters py-3">
                <div class="col px-2">
                  <h5 class="h6 mb-0">5. The authoritative alerting sources</h5>
                </div>
              </a>
              <a href="learn-cap-6.php" class="list-group-item list-group-item-action row no-gutters py-3">
                <div class="col px-2">
                  <h5 class="h6 mb-0">6. Sampling CAP-enabled alerting systems</h5>
                </div>
              </a>
              <a href="learn-cap-7.php" class="list-group-item list-group-item-action row no-gutters py-3">
                <div class="col px-2">
                  <h5 class="h6 mb-0">7. Exploiting CAP alert hubs</h5>
                </div>
              </a>
              <a href="learn-cap-8.php" class="list-group-item list-group-item-action row no-gutters py-3">
                <div class="col px-2">
                  <h5 class="h6 mb-0">8. Review</h5>
                </div>
              </a>

            </div>
            
            <a href="learn-cap-4.php" class="mt-4 btn btn-primary btn-lg btn-block">Next module</a>                
                
               
 
 
              </div>
              
              
              

              
              
              
            </div>
            
            
        </div>
          
          

          
          

        </div>
      </div>
      

      
    </section>


<?php include ("hub-footer.php"); ?>
