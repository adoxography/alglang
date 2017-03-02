<?php

define("NOT_FOUND", -1);

function assessAllForms()
{
    $forms = \App\Form::all();
    foreach ($forms as $form) {
        $form->connectMorphemes();
    }
    return "Operation complete";
}

/**
 * Replaces all of the tags in a block of text
 * 
 * Tags are strings preceeded by the $ symbol
 * 
 * @param string The text to sort through
 * @return string The text with tags replaced
 */
function replaceTags($text)
{
    $output = $text;
    $start;
    $end;

    // Check to see if there are any tags in the text
    $start = strpos($text, '$');

    if ($start) {

        // Find the end of the tag; that's the first whitespace that occurs after the tag
        // If no whitespace was found, it means that the tag ends the text
        $end = strpos($text, ' ', $start);
        if (preg_match("/\s/", $text, $matches, PREG_OFFSET_CAPTURE, $start)) {
            $end = $matches[0][1];
        } else {
            $end = strlen($text);
        }

        // Get the parts of the text before and after the tag
        $firstPart = substr($text, 0, $start);
        $lastPart = substr($text, $end);

        // Get the tag, and look it up
        $tag = substr($text, $start + 1, $end - $start - 1);
        $shortcut = \App\Shortcut::where('short', $tag)->first();

        // If it was found, replace the tag with it
        if ($shortcut) {
            $replacement = $shortcut->long;
        } else {
            $replacement = $tag;
        }

        $output = replaceTags($firstPart.$replacement.$lastPart);
    }

    return $output;
}

function binarySearch($item, $list)
{
    $hi = count($list)-1;
    $lo = 0;
    $mid;
    $spot = NOT_FOUND;
    $comparison;
        
    while ($hi >= $lo && $spot < 0) {
        $mid = floor(($hi + $lo)/2);
        $comparison = $list[$mid]->compareTo($item);

        if ($comparison == 0) {
            $spot = $mid;
        }//if
        elseif ($comparison < 0) {
            $lo = $mid + 1;
        }//if
        else {
            $hi = $mid - 1;
        }//else
    }//while

    return $spot;
}//binarySearch

function getOptions($collection, $field = 'name')
{
    $options = array();

    foreach ($collection as $item) {
        $options[] = ['value' => $item->$field];
    }

    return $options;
}

function organizeForDropdown($collection)
{
    $output = [];

    foreach ($collection as $item) {
        $output += [$item->id => $item->name];
    }

    return $output;
}

function flash($message, $level = 'info')
{
    session()->flash('flashMessage', $message);
    session()->flash('flashLevel', $level);
}

function intcmp($n1, $n2)
{
    $output = 0;

    //Handle cases where one or both are null
    if ($n1 === null || $n2 === null) {
        if ($n1) {
            $output = 1;
        } elseif ($n2) {
            $output = -1;
        }
    } else {
        if ($n1 < $n2) {
            $output = -1;
        } elseif ($n1 > $n2) {
            $output = 1;
        }
    }
    return $output;
}

function linearSearch($item, $list)
{
    $pos = NOT_FOUND;
    for ($i=0; $i<count($list) && $pos === NOT_FOUND; $i++) {
        // if (isset($list[$i]) && $list[$i]->compareTo($item) == 0) {
        //     $pos = $i;
        // }
        if (isset($list[$i]) && $list[$i] === $item) {
            $pos = $i;
        }
    }//for
    return $pos;
}//findInList

function ordInsert($item, &$list)
{
    $spotFound = false;
    $index = count($list);
        
    while ($index > 0 && !$spotFound) {
        if ($list[$index-1]->compareTo($item) <= 0) {
            $spotFound = true;
        } else {
            $list[$index] = $list[$index-1];
            $index--;
        }//else
    }//while

    $list[$index] = $item;
        
    return $index;
}//ordInsert

function printOptions($items, $preset = null, $presetField = null, $display = 'name')
{
    foreach ($items as $item) {
        if (old($presetField) === $item->id || (isset($preset[$presetField]) && $preset[$presetField] === $item->id)) {
            echo "<option value = '" . $item->id . "' selected = 'selected'>" . $item->getAttribute($display) . '</option>';
        }//if
        else {
            echo "<option value = '" . $item->id . "'>" . $item->getAttribute($display) . '</option>';
        }
    }
}

function validDatabaseInput($val)
{
    return !is_null($val) && $val !== '';
}
