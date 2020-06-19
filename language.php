$lingue = array(1=>'Italiano', 'English');
$choose = array(1=>'Switch to English', 'Passa all'italiano');
$flags = array(1=>'us', 'it');
   $lingua = @$_GET['lingua'];
   if (!$lingua) $lingua = 1; // default italiano

 switch ($lingua)
      {
         case 1:
            include "lingue/it.php";
            break;
         case 2:
            include "lingue/us.php";
            break;
      }

      <'php
      foreach ($lingue as $k=>$v)
         {
            if ($k != $lingua)
               {
                  ?>
                      <a href="?lingua=<?php echo $k; ?>"><img src="bandiere/<?php echo $flags[$k]; ?>.gif" alt="<?php echo $v; ?>" title="<?php echo $v; ?>" border="0" /></a>
                  <?php
               }
         }
      ?>
