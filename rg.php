<?php
function evaluateProximity($deciphered_acct_name, $message_sent_to_dialog_flow)
{
    $deciphered_acct_name = strtolower($deciphered_acct_name);
    $message_sent_to_dialog_flow = strtolower($message_sent_to_dialog_flow);

    compare($deciphered_acct_name, $message_sent_to_dialog_flow);
    return ceil(compare($message_sent_to_dialog_flow, $deciphered_acct_name) / 2);
}

function wordsof($s)
{
    $a = [];
    foreach (explode(" ", $s) as $w) $a[] = $w;
    return $a;
}

function compare($needle, $hay)
{

    if (!strlen($needle) || !strlen($hay)) return 0;

    if ($needle == $hay) return 100;

    $needle_word = wordsof($needle);
    if (!$needle_word) return 0;

    $chDiff = 0;
    foreach ($needle_word as $word) {
        if (!is_bool(strpos($hay, $word))) $chDiff++;
    }

    return number_format($chDiff / count($needle_word), 2) * 100;

}