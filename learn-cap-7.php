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
              <div class="plyr" data-plyr-provider="vimeo" data-plyr-embed-id="480774549"></div>
            </div>
	         <h3 class="mt-4">Exploiting CAP alert hubs</h3>
              <p class="lead"> 
How to take advantage of the sites that aggregate CAP news feeds in one location.
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
Our last topic in this presentation explains how to exploit the "CAP Alert Hubs" that I mentioned several times already.
</p><p>
A CAP Alert Hub is a site that aggregates CAP news feeds in one location. The idea is that CAP news feeds published by alerting authorities get aggregated on the Hub almost as soon as the alert is posted online. For example, the WMO Alert Hub aggregates CAP news feeds from alerting authorities in the International Register of Alerting Authorities.
</p><p>
Here I focus on CAP Alert Hubs on global cloud infrastructures. Today, five clouds have 5% or more global market share: Amazon Web Services, Microsoft Azure, Google Cloud, Alibaba Cloud, and IBM Cloud.
</p><p>
There are several benefits to having CAP news feeds aggregated to a cloud-based CAP Alert Hub:
</p><p>
Speed - Dissemination time is crucial for sudden-onset events such as earthquakes, tsunami, terrorists strikes, and tornadoes 
</p><p>
Scale - The global scale dissemination infrastructure provides high performance, high reliability, and high availability
</p><p>
Redundancy - An additional copy of alert messages is kept elsewhere from the originator
</p><p>
Security and Authenticity 
</p><p>
Analytics - A centralized aggregator simplifies analysis and enables optimization of alert dissemination
</p><p>
It is important to emphasize that CAP Alert Hubs provide only a copy of the alert; they do not have the role of an alerting authority.
</p><p>
Think of CAP Alert Hubs as publishers rather than authors or editors.
</p><p>
Here I want to mention a CAP alert Hub that we call The "Filtered Alert Hub". This Hub aggregates CAP alerts from more than 100 sources worldwide, including national sources such as China, India, and the U.S, as well as other aggregators such as MeteoAlarm.
</p><p>
The Filtered Alert Hub  offers those aggregated alerts as more specific CAP news feeds, filtered by location, language, or other alert content.
</p><p>
For example, there is a filtered feed for alerts that are both "official‑only" and "high-priority only". That CAP news feed has CAP alerts from sources in the International Register of Alerting Authorities. Further, that CAP news feed has only high-priority alerts--alerts warning people in the alerting area to take immediate action.
</p><p>
The Filtered Alert Hub runs on Amazon Web Services but is designed to install on any other cloud too. Being cloud-based, it should have  high levels of availability, reliability, authenticity, and security.
</p><p>
For sudden-onset events such as earthquakes, tsunami, and tornadoes, even seconds of delay could be deadly. Alerts can be pushed immediately to the Hub, and pushed immediately from the Hub to specific subscribers. Used this way, such time-critical warnings can be delivered within seconds.
</p><p>
The Filtered Alert Hub has CAP News Feeds available now. There are CAP news feeds at global scale, national scale, and for each of more than 1800 cities.
</p><p>
Each is an RSS feed - anyone can simply subscribe to it.
</p><p>
A Broadcast News Organizations can select any, such as the links given here:
</p>
	<ul>
		<li>
Valid CAP alerts received "unfiltered"
		</li><li>
Recent public alerts from official sources "official-public"
		</li><li>
Recent high-priority, public alerts from official sources "official-high-priority-public"
		</li>
	</ul>
<p>
Here is a screen shot of the Filtered Alert Hub web site. The page includes links to: the current CAP alerts, the available CAP news feeds, the CAP sources that are being aggregated, and the wiki page about the project.
</p><p>
The Severe Weather Information Center (SWIC) includes a CAP Alert Hub that aggregates many of the same CAP news feeds aggregated by the Filtered Alert Hub. However, this CAP Alert Hub is specific to weather-related hazards.
</p><p>
Here is a link to and a screenshot of SWIC, which is operated on behalf of the World Meteorological Organization by the Hong Kong Observatory.
</p><p>
Google Public Alerts are designed to bring users relevant emergency alerts through everyday services like Google Search, Google Maps, and Android push notifications. 
</p><p>
Interested users from outside the critical region can follow active alerts at the Google Public Alerts page on Search.
</p><p>
The most prominent and well-trusted Non-Governmental Organization in the context of emergencies is the International Federation of Red Cross and Red Crescent Societies (IFRC).
</p><p>
IFRC is now establishing an IFRC Alert Hub. This will be a free online source for published emergency alerts from local, national, and regional sources.
</p><p>
IFRC Alert Hub will have a strong focus on multi-hazard alerting. It will leverage CAP for all manner of emergency preparedness and response activities, at all scales, from city through country and on up to global.
</p><p>
The expected consumers of IFRC Alert Hub include Red Cross and Red Crescent National Societies, news organizations, telecommunications providers, international and national emergency managers, and disaster relief organizations, among many others.
	  </p>
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
              <a href="learn-cap-3.php" class="list-group-item list-group-item-action row no-gutters py-3">
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
              <a href="learn-cap-7.php" class="list-group-item list-group-item-action active row no-gutters py-3">
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
            
            <a href="learn-cap-8.php" class="mt-4 btn btn-primary btn-lg btn-block">Next module</a>                
                
               
 
 
              </div>
              
              
              

              
              
              
            </div>
            
            
        </div>
          
          

          
          

        </div>
      </div>
      

      
    </section>


<?php include ("hub-footer.php"); ?>
