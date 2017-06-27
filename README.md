# modal_j
modal plugin for Jquery and Bootstrap.

install command:

```

bower install modal_j

```
usage:

In JavaScript:
```JS

$('#target_dom_id').modal_j({
        modal_title: 'DEMO_TITLE',
        modal_size: 'modal-large',
        modal_content: $('#add_domain_content').html()
});

```
In HTML:

```HTML
<div id='target_dom_id'></div>
<div id='target_dom_content' class='modal_j'>
    <form action="" method="post">
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">Domain</span>
                <input type="text" id="domain_input" name="domain" class="form-control">
            </div>
        </div>

        <hr>
        <div class="form-group fright">
            <button type="button" id = 'add_domain_submit' data-dismiss="modal" class="btn btn-sm btn-primary "><i class="fa fa-dot-circle-o"></i> Submit</button>
            <button type="reset" class="btn btn-sm btn-danger "><i class="fa fa-ban"></i> Reset</button>
        </div>

    </form>

</div>


```
