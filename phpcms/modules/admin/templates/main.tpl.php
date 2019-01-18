<?php
defined('IN_ADMIN') or exit('No permission resources.');
include PC_PATH . 'modules' . DIRECTORY_SEPARATOR . 'admin' . DIRECTORY_SEPARATOR . 'templates' . DIRECTORY_SEPARATOR . 'header.tpl.php';
?>
<div id="main_frameid" class="pad-10 display" style="_margin-right:-12px;_width:98.9%;">
    <div class="explain-col mb10" style="display:none" id="browserVersionAlert"><?php echo L('ie8_tip') ?></div>
    <div class="col-2 lf mr10" style="width:48%">
        <h6><?php echo L('personal_information') ?></h6>
        <div class="content">
            <?php echo L('main_hello') ?><?php echo $admin_username ?><br/>
            <?php echo L('main_role') ?><?php echo $rolename ?> <br/>
            <div class="bk20 hr">
                <hr/>
            </div>
            <?php echo L('main_last_logintime') ?><?php echo date('Y-m-d H:i:s', $logintime) ?><br/>
            <?php echo L('main_last_loginip') ?><?php echo $loginip ?> <br/>
        </div>
    </div>
</div>

</body></html>