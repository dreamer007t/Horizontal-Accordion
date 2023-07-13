function project_type_accordion(){
    ob_start();

    $projectTypeTerms = get_terms([
        'taxonomy' => 'project_type',
        'hide_empty' => false,
    ]);

//	error_log(var_export($whatWeDoPosts, true));
    ?>
    <div class="accordion-wrapper">
        <?php
        for($ii = 0; $ii <= count($projectTypeTerms)-1; $ii++){
            $projectTypeTitle = $projectTypeTerms[$ii]->name;
		
            $projectTypeSlug =  $projectTypeTerms[$ii]->slug;
		//	$whatWeDoPermaLink = get_term_link($projectTypeSlug,'project_type');
		
            $projectTypeContent = $projectTypeTerms[$ii]->description;
            $term_id = $projectTypeTerms[$ii]->term_id;
            $projectTypeBackground = get_field('project_type_accordion_image','term_'.$term_id);
	$whatWeDoPermaLink = get_field('project_type_heading_link','term_'.$term_id);
            if($ii === 0){ ?>
		
                <div class="accordion-item open" id="project-type-term-<?php echo $projectTypeSlug; ?>">

                    <div class="accordion-item-container" style="background: url(<?php echo $projectTypeBackground?>) no-repeat center center; background-size: cover;">
                        <div class="accordion-heading" >
                            <a href="<?php echo $whatWeDoPermaLink;?>"><h2><?php echo $projectTypeTitle; ?></h2></a>
                        </div>
                        <div class="accordion-content-wrapper">
                            <div class="accordion-content" >
                                <div><?php echo $projectTypeContent?></div>
                            </div>
                        </div>
                        <div class="accordion-button" >
                            <div class="w-btn-wrapper"><a class="w-btn us-btn-style_3" href="<?php echo $whatWeDoPermaLink;?>">Read More</a></div>
                        </div>

                    </div>
                </div>
                <?php
            }
            else{ ?>
                <div class="accordion-item closed" id="project-type-term-<?php echo $projectTypeSlug; ?>">
                    <div class="accordion-item-container" style="background: url(<?php echo $projectTypeBackground?>) no-repeat center center; background-size: cover;  background-blend-mode: luminosity;">
                        <div class="accordion-heading">
                          <a href="<?php echo $whatWeDoPermaLink;?>"><h2><?php echo $projectTypeTitle; ?></h2></a>
                        </div>
                        <div class="accordion-content-wrapper">
                            <div class="accordion-content" >
                                <div><?php echo $projectTypeContent?></div>
                            </div>
                        <div class="accordion-button" >
                            <div class="w-btn-wrapper"><a class="w-btn us-btn-style_3" href="<?php echo $whatWeDoPermaLink;?>">Read More</a></div>
                        </div>
                        </div>

                    </div>


                </div>
                <?php
            }

        }
        ?>
    </div>
    <?php
    return ob_get_clean();
}

add_shortcode("project-type-accordion", "project_type_accordion");
